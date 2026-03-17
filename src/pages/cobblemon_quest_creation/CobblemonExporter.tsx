import { useState, useEffect, type ChangeEvent } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { ExportUtils } from './ExportUtils';
import { NationalDex } from './NationalDex';
import { TypeGroupWriter } from './TypeGroupWriter';
import dexFilePath from '../../assets/cobblemon_quests/master_national_dex.txt';
import iconPath from '../../assets/cobblemon_quests/icon.txt';
import { PokedexGroupWriter } from './PokedexGroupWriter';
import { FarmGroupWriter } from './FarmGroupWriter';
import { HealGroupWriter } from './HealGroupWriter';
import { MiscGroupWriter } from './MiscGroupWriter';
import { PokeMart } from './Pokemart';
import { GroupDataWriter } from './GroupDataWriter';

export var loadAllPokemon = false;
export var loadTypeQuests = false;
export var loadGenQuests = false;
export var loadFarmQuests = false;
export var loadHealQuests = false;
export var loadMiscQuests = false;
export var loadShopQuests = false;

export default function CobblemonExporter() {
  const [dexText, setDexText] = useState<string>("");
  const [iconText, setIconText] = useState<string>("");
  const [jarNames, setJarNames] = useState<string[]>([]);

  // State for boxes
  const [typeQ, setTypeQ] = useState(false);
  const [genQ, setGenQ] = useState(false);
  const [farmQ, setFarmQ] = useState(false);
  const [healQ, setHealQ] = useState(false);
  const [miscQ, setMiscQ] = useState(false);
  const [shopQ, setShopQ] = useState(false);

  // App fetch text on start
  useEffect(() => {
    fetch(dexFilePath)
      .then(res => res.text())
      .then(text => setDexText(text))
      .catch(err => console.error("File no load", err));

    fetch(iconPath)
      .then(res => res.text())
      .then(text => setIconText(text))
      .catch(err => console.error("Icon no load", err));
  }, []);

  const loadJar = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!e.target.files || e.target.files.length === 0) return;
    const zip = new JSZip();
    const contents = await zip.loadAsync(e.target.files[0]);
    const names: string[] = [];
    
    const folder = contents.folder("assets/cobblemon/textures/pokemon/");
    if (folder) {
      folder.forEach((relPath: string, file: JSZip.JSZipObject) => {
        if (file.dir) {
          const parts = relPath.replace(/\/$/, "").split("_");
          if (parts.length > 1) names.push(parts[1]);
        }
      });
    }
    setJarNames(names);
  };

  const runExport = (): void => {
    if (!dexText) {
      alert("Wait. Dex TXT loading!");
      return;
    }
    
    ExportUtils.resetOffsets(); 
    
    const zip = new JSZip();
    const questsFolder = zip.folder("ftbquests/quests");
    if (!questsFolder) return;
    
    const chapters = questsFolder.folder("chapters");
    if (!chapters) return;
    
    const natDexSnbt = NationalDex.reset(false, dexText);
    chapters.file("national_dex.snbt", natDexSnbt);

    const activeGroups: string[] = [];
    if (loadGenQuests) activeGroups.push("pokedex");
    if (loadTypeQuests) activeGroups.push("type");
    // Add more here if GroupDataWriter gets more types

    const groupFiles = GroupDataWriter.writeChapterGroups(activeGroups);
    questsFolder.file("chapter_groups.snbt", groupFiles.chapterGroups);
    questsFolder.file("data.snbt", groupFiles.data);

    if(loadTypeQuests) {
      const typeFiles = TypeGroupWriter.writeTypeChapters();
      for (const [fileName, fileData] of Object.entries(typeFiles)) {
        chapters.file(fileName, fileData);
      }
    }

    if(loadGenQuests) {
      const typeFiles = PokedexGroupWriter.writePokedexChapters();
      for (const [fileName, fileData] of Object.entries(typeFiles)) {
        chapters.file(fileName, fileData);
      }
    }

    if(loadFarmQuests) {
      const typeFiles = FarmGroupWriter.writeFarmChapters();
      for (const [fileName, fileData] of Object.entries(typeFiles)) {
        chapters.file(fileName, fileData);
      }
    }

    if(loadHealQuests) {
      const typeFiles = HealGroupWriter.writeHealChapters();
      for (const [fileName, fileData] of Object.entries(typeFiles)) {
        chapters.file(fileName, fileData);
      }
    }

    if(loadMiscQuests) {
      const typeFiles = MiscGroupWriter.writeMiscChapters();
      for (const [fileName, fileData] of Object.entries(typeFiles)) {
        chapters.file(fileName, fileData);
      }
    }

    if(loadShopQuests) {
      const typeFiles = PokeMart.writeShopChapters();
      for (const [fileName, fileData] of Object.entries(typeFiles)) {
        chapters.file(fileName, fileData);
      }
    }

    zip.generateAsync({ type: "blob" }).then((blob: Blob) => {
      saveAs(blob, "cobblemon_quests.zip");
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <pre style={{ fontFamily: 'monospace' }}>{iconText}</pre>
      <h3>Upload Cobblemon.jar</h3>
      <input type="file" accept=".jar" onChange={loadJar} />
      {jarNames.length > 0 && <p>Found {jarNames.length} Pokemon in JAR!</p>}

      <h3>Customise Which Quests Generate</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
        <label>
          <input type="checkbox" checked={typeQ} onChange={(e) => { setTypeQ(e.target.checked); loadTypeQuests = e.target.checked; }} /> Load Type Quests
        </label>
        <label>
          <input type="checkbox" checked={genQ} onChange={(e) => { setGenQ(e.target.checked); loadGenQuests = e.target.checked; }} /> Load Gen Quests
        </label>
        <label>
          <input type="checkbox" checked={farmQ} onChange={(e) => { setFarmQ(e.target.checked); loadFarmQuests = e.target.checked; }} /> Load Farm Quests
        </label>
        <label>
          <input type="checkbox" checked={healQ} onChange={(e) => { setHealQ(e.target.checked); loadHealQuests = e.target.checked; }} /> Load Heal Quests
        </label>
        <label>
          <input type="checkbox" checked={miscQ} onChange={(e) => { setMiscQ(e.target.checked); loadMiscQuests = e.target.checked; }} /> Load Misc Quests
        </label>
        <label>
          <input type="checkbox" checked={shopQ} onChange={(e) => { setShopQ(e.target.checked); loadShopQuests = e.target.checked; }} /> Load Shop Quests
        </label>
      </div>

      <h3>Download</h3>
      <button onClick={runExport}>Make ZIP</button>
    </div>
  );
}