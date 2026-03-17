import { useState, useEffect } from "react";
import type { GameEncounter } from "./Game";
import { EncounterPool } from "./Game";
import styles from "./OfMossAndBonesDev.module.css";

export default function OfMossAndBonesDev() {
  const [currentId, setCurrentId] = useState("Start");
  
  const [header, setHeader] = useState("");
  const [asciiUrl, setAsciiUrl] = useState("");
  const [content, setContent] = useState("");
  const [dialoguePreview, setDialoguePreview] = useState("");
  const [requirements, setRequirements] = useState("");
  const [options, setOptions] = useState<{ id: string }[]>([]);

  useEffect(() => {
    const data = EncounterPool[currentId];
    if (data) {
      setHeader(data.header || "");
      setAsciiUrl(data.asciiUrl || "");
      setContent(data.content || "");
      setDialoguePreview(data.dialoguePreview || "");
      setRequirements((data.requirements || []).join(", "));
      setOptions(data.options || []);
    } else {
      setHeader("");
      setAsciiUrl("");
      setContent("");
      setDialoguePreview("");
      setRequirements("");
      setOptions([]);
    }
  }, [currentId]);

  const [isAdding, setIsAdding] = useState(false);
  const [newOptId, setNewOptId] = useState("");

  function saveOption() {
    if (newOptId) {
      setOptions([...options, { id: newOptId }]);
      setNewOptId("");
      setIsAdding(false);
    }
  }

  function downloadJson() {
    const data: Partial<GameEncounter> = {
      id: currentId,
      header,
      asciiUrl,
      content,
      dialoguePreview,
      requirements: requirements.split(",").map(r => r.trim()).filter(Boolean),
      options: options as GameEncounter[] 
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentId || "new_encounter"}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Check all options for bad IDs
  function testTree() {
    const visited = new Set<string>();
    const toCheck = [currentId];
    const missing = new Set<string>();

    while (toCheck.length > 0) {
      const id = toCheck.pop()!;
      if (visited.has(id)) continue;
      
      visited.add(id);
      const data = EncounterPool[id];
      
      if (!data) {
        missing.add(id);
        continue;
      }

      if (data.options) {
        for (const opt of data.options) {
          if (!visited.has(opt.id)) {
            toCheck.push(opt.id);
          }
        }
      }
    }

    if (missing.size > 0) {
      alert("Bad IDs found:\n" + Array.from(missing).join("\n"));
    } else {
      alert(`All good. Checked ${visited.size} files.`);
    }
  }

  return (
    <div className={styles.devContainer}>
      <h2 className={styles.devHeader}>Make JSON File</h2>
      
      <div className={styles.inputGroup}>
        <label className={styles.label}>Load/Edit ID:</label>
        <input className={styles.input} value={currentId} onChange={e => setCurrentId(e.target.value)} />
      </div>
      
      <div className={styles.inputGroup}>
        <label className={styles.label}>Header:</label>
        <input className={styles.input} value={header} onChange={e => setHeader(e.target.value)} />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>ASCII URL:</label>
        <input className={styles.input} value={asciiUrl} onChange={e => setAsciiUrl(e.target.value)} />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Preview Text:</label>
        <input className={styles.input} value={dialoguePreview} onChange={e => setDialoguePreview(e.target.value)} />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Reqs (comma space):</label>
        <input className={styles.input} value={requirements} onChange={e => setRequirements(e.target.value)} />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Content:</label>
        <textarea className={styles.textarea} value={content} onChange={e => setContent(e.target.value)} rows={5} />
      </div>

      <div className={styles.optionsBox}>
        <h3 className={styles.label}>Options</h3>
        
        {options.map((opt, i) => {
          const optData = EncounterPool[opt.id];
          return (
            <div key={i} className={styles.optionWidget}>
              <strong>ID: {opt.id}</strong>
              {optData ? (
                <>
                  <p>Preview: {optData.dialoguePreview}</p>
                  <p>Reqs: {optData.requirements?.join(", ") || "None"}</p>
                </>
              ) : (
                <p style={{ color: "red" }}>File not found. Will make new.</p>
              )}
              
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button className={styles.button} onClick={() => setCurrentId(opt.id)}>Load</button>
                <button className={styles.button} onClick={() => {
                  const newId = prompt("New Option ID:", opt.id);
                  if (newId) {
                    const newOpts = [...options];
                    newOpts[i].id = newId;
                    setOptions(newOpts);
                  }
                }}>Edit This ID</button>
                <button className={styles.button} onClick={() => {
                  const newOpts = [...options];
                  newOpts.splice(i, 1);
                  setOptions(newOpts);
                }}>Remove</button>
              </div>

            </div>
          );
        })}

        {isAdding ? (
          <div className={styles.inputGroup}>
            <input className={styles.input} placeholder="New Option ID" value={newOptId} onChange={e => setNewOptId(e.target.value)} />
            <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
              <button className={styles.button} onClick={saveOption}>Save</button>
              <button className={styles.button} onClick={() => setIsAdding(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <button className={styles.button} onClick={() => setIsAdding(true)}>Add Option</button>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        <button className={styles.button} onClick={downloadJson}>
          Download JSON
        </button>
        <button className={styles.button} onClick={testTree}>
          Test Tree
        </button>
      </div>
    </div>
  );
}