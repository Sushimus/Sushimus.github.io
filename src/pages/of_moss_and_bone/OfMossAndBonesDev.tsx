import { useState, useEffect } from "react";
import type { GameEncounter } from "./Game";
import { EncounterPool } from "./Game";
import styles from "./OfMossAndBonesDev.module.css";

export default function OfMossAndBonesDev() {
  const [currentId, setCurrentId] = useState("Start");
  const [inputId, setInputId] = useState("Start"); // For the text box
  
  // Store unsaved work
  const [wipData, setWipData] = useState<Record<string, Partial<GameEncounter>>>({});

  const [header, setHeader] = useState("");
  const [asciiUrl, setAsciiUrl] = useState("");
  const [content, setContent] = useState("");
  const [dialoguePreview, setDialoguePreview] = useState("");
  const [requirements, setRequirements] = useState("");
  const [options, setOptions] = useState<{ id: string }[]>([]);

  // Function to load data into the form
  function loadForm(id: string, wips: Record<string, any>) {
    const data = wips[id] || EncounterPool[id];
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
  }

  // Initial load
  useEffect(() => {
    loadForm("Start", wipData);
  }, []);

  // Save current, then switch
  function switchId(newId: string) {
    if (newId === currentId) return;

    const currentWork = {
      id: currentId,
      header,
      asciiUrl,
      content,
      dialoguePreview,
      requirements: requirements.split(",").map(r => r.trim()).filter(Boolean),
      options: options as GameEncounter[]
    };

    const updatedWips = { ...wipData, [currentId]: currentWork };
    setWipData(updatedWips);
    
    // Add empty entry for new ID if it doesn't exist so it shows in the list
    if (!updatedWips[newId] && !EncounterPool[newId]) {
      updatedWips[newId] = { id: newId };
    }
    
    setWipData(updatedWips);
    loadForm(newId, updatedWips);
    setCurrentId(newId);
    setInputId(newId);
  }

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

  function testTree() {
    // ... [Same testTree logic as before, omitted for brevity but you can keep yours] ...
    alert("Tree tested."); 
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: "100vh", width: "100vw" }}>
      
      {/* LEFT COLUMN: History / WIP */}
      <div style={{ borderRight: "2px solid #333", padding: "20px", overflowY: "auto" }}>
        <h3>Opened Files</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {Object.keys(wipData).map(id => (
            <button 
              key={id} 
              className={styles.button} 
              style={{ fontWeight: id === currentId ? "bold" : "normal", background: id === currentId ? "#555" : undefined }}
              onClick={() => switchId(id)}
            >
              {id} {wipData[id]?.header ? `(${wipData[id].header})` : ""}
            </button>
          ))}
        </div>
      </div>

      {/* CENTER COLUMN: Editor */}
      <div style={{ padding: "20px", overflowY: "auto", borderRight: "2px solid #333" }} className={styles.devContainer}>
        <h2 className={styles.devHeader}>Editing: {currentId}</h2>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Load/Edit ID:</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input className={styles.input} value={inputId} onChange={e => setInputId(e.target.value)} />
            <button className={styles.button} onClick={() => switchId(inputId)}>Go</button>
          </div>
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
            const optData = wipData[opt.id] || EncounterPool[opt.id];
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
                  <button className={styles.button} onClick={() => switchId(opt.id)}>Load</button>
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
          <button className={styles.button} onClick={downloadJson}>Download JSON</button>
          <button className={styles.button} onClick={testTree}>Test Tree</button>
        </div>
      </div>

      {/* RIGHT COLUMN: Empty for now (Thirds) */}
      <div style={{ padding: "20px", overflowY: "auto" }}>
         <h3>Future Tools Here</h3>
      </div>

    </div>
  );
}