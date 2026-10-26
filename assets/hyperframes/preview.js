(() => {
  const root = document.getElementById('root');
  const shot = (title, detail, src, alt) => ({type:'image',title,detail,src,alt});
  const sign = (title, score, src, alt) => ({type:'sign',title,score,src,alt});
  const profiles = {
    simpul:{name:'Simpul',tag:'HR WORKFLOW ASSISTANT',scenes:[
      shot('Employee assistant','Ask about HR data or start an available workflow.','../simpul/employee-assistant.svg','Simpul employee assistant workspace'),
      shot('Workflow library','Role-aware requests, review status, and workflow access.','../simpul/workflow-library.svg','Simpul HR workflow library'),
      shot('Admin guide','Review a request, configure steps, and connect the workflow.','../simpul/admin-guide.svg','Simpul admin guide'),
      shot('Sign in','A shared workspace for connected HR workflows.','../simpul/login.svg','Simpul sign-in screen')
    ]},
    dokumen:{name:'DokumenTanya',tag:'DOCUMENT INTELLIGENCE',scenes:[
      shot('Document workspace','PDF preview, OCR progress, and chat in one workspace.','../dokumen-tanya-preview.svg','DokumenTanya document workspace'),
      {type:'document',title:'Evidence-linked answers',detail:'Keep each answer connected to its source page, document version, and extracted evidence.'},
      {type:'document',title:'OCR and table extraction',detail:'Review processing progress, correct OCR text, and search across selected documents.'}
    ]},
    bali:{name:'BaliTowerOps',tag:'OPERATIONS PLATFORM',scenes:[
      shot('Inventory command center','Operational inventory and logistics dashboard.','../balitowerops-inventory-dashboard.webp','BaliTowerOps inventory dashboard'),
      shot('Admin workflow orchestrator','Draft, inspect, and manage rule-driven workflows.','../balitowerops-admin-workflows.webp','BaliTowerOps workflow administration'),
      shot('Sign-in','Operations workspace for telecommunications infrastructure.','../balitowerops-login.webp','BaliTowerOps sign-in screen')
    ]},
    sign:{name:'Hijaiyah Sign Recognition',tag:'COMPUTER VISION',scenes:[
      sign('Sample 01','Sample output','../sign-mediapipe-lam-dhammah.webp','Hand-sign input and MediaPipe landmark overlay'),
      sign('Ba Kasrah','Sample','../sign-mediapipe-ba-kasrah.webp','Ba Kasrah sample with MediaPipe landmarks'),
      {type:'sign-summary',title:'Gesture recognition',score:'112 classes',detail:'MediaPipe Holistic keypoints → sequence model → readable output'}
    ]},
    autism:{name:'Sensory Sound Monitor',tag:'ASSISTIVE ACOUSTIC AI',scenes:[
      {type:'audio',title:'Audio event monitor',event:'Environmental sound sample',status:'Sample classification',metric:'90%',metricLabel:'validation accuracy'},
      {type:'audio',title:'Spectral feature view',event:'MFCC feature extraction',status:'40 feature coefficients',metric:'6 classes',metricLabel:'audio categories'},
      {type:'audio',title:'Risk signal summary',event:'Demo output · not a diagnosis',status:'Designed as an early awareness aid',metric:'1D-CNN',metricLabel:'classification model'}
    ]},
    kada:{name:'Event Intelligence',tag:'KADA CAPSTONE',scenes:[
      {type:'kada',title:'Event pulse',detail:'Sample event telemetry across registrations and check-ins.'},
      {type:'kada',title:'Survey insights',detail:'LLM-generated themes and recommendations from survey responses.'},
      {type:'kada',title:'Flexible registration forms',detail:'Dynamic MongoDB schemas and asynchronous event operations.'}
    ]}
  };
  const chrome=(name,tag)=>`<div class="chrome"><span class="chrome-dots"><i></i><i></i><i></i></span><span class="chrome-title">${name}</span><span class="chrome-tag">${tag}</span></div>`;
  const imageScene=(p,s)=>`<div class="window">${chrome(p.name,p.tag)}<img class="screen-img" src="${s.src}" alt="${s.alt}"><div class="caption"><strong>${s.title}</strong><span>${s.detail}</span></div><span class="preview-note">Interface preview · ${p.name}</span></div>`;
  const signScene=(p,s)=>`<div class="window"><div class="mock-sign">${chrome(p.name,p.tag)}<div class="sign-content"><div class="camera"><img src="${s.src}" alt="${s.alt}"><span class="camera-label">INPUT FRAME / MEDIAPIPE LANDMARKS</span></div><div class="panel result"><span class="pill">SAMPLE OUTPUT</span><h2>${s.title}</h2><div class="result-score">${s.score}</div><div class="muted">TOP MODEL PREDICTION</div><div class="bar" style="margin-top:10px"><i style="width:${s.score==='97.54%'?'97.54%':'72%'}"></i></div><div class="mini-list"><div class="mini-item">Bi-LSTM <b>benchmark</b></div><div class="mini-item">LSTM-GRU <b>benchmark</b></div><div class="mini-item">Transformer <b>97.54%</b></div></div></div></div></div></div>`;
  const signSummary=(p,s)=>`<div class="window"><div class="mock-sign">${chrome(p.name,p.tag)}<div class="sign-content"><div class="panel result"><span class="pill">MODEL PIPELINE</span><h2>${s.title}</h2><p class="muted" style="font-size:16px;line-height:1.6">${s.detail}</p><div class="mini-list"><div class="mini-item">MediaPipe Holistic <b>75 keypoints</b></div><div class="mini-item">Temporal sequence <b>Bi-LSTM / GRU</b></div><div class="mini-item">Transformer encoder <b>97.54%</b></div></div></div><div class="panel result"><span class="pill">INCLUSIVE LEARNING</span><div class="result-score" style="font-size:26px;margin-top:28px">${s.score}</div><p class="muted" style="font-size:14px">Hijaiyah letters and harakat</p></div></div></div></div>`;
  const documentScene=(p,s)=>`<div class="window"><div class="mock">${chrome(p.name,p.tag)}<div class="mock-body"><div class="panel"><div class="panel-head">${s.title}<span class="pill">SOURCE LINKED</span></div><div style="padding:15px"><div class="row"><span>Annual operations guide.pdf</span><b class="green">Ready</b></div><div class="row"><span>OCR processing</span><b class="blue">8 / 8 pages</b></div><div class="row"><span>Selected context</span><b>3 documents</b></div><div class="bar" style="margin-top:16px"><i style="width:100%"></i></div></div></div><div class="panel"><div class="panel-head">Answer evidence<span class="pill">PAGE 04</span></div><div style="padding:18px"><p style="font-size:17px;color:#353146">${s.detail}</p><div class="insight">“The request should be reviewed before the next processing step.”</div><div class="row" style="margin-top:12px"><span>Document · v2 · page 4</span><b class="coral">View source ↗</b></div></div></div></div></div></div>`;
  const audioScene=(p,s)=>{const bars=Array.from({length:50},(_,i)=>`<i style="--i:${i};--h:${18+((i*31+17)%75)}%"></i>`).join('');return `<div class="window"><div class="mock">${chrome(p.name,p.tag)}<div class="mock-body"><div class="panel"><div class="panel-head">${s.title}<span class="pill">DEMO SAMPLE</span></div><div class="metric-row" style="padding:14px 14px 0"><div class="metric"><strong>3.0s</strong><span>audio window</span></div><div class="metric"><strong>22.05k</strong><span>sample rate</span></div><div class="metric"><strong>40</strong><span>MFCC features</span></div></div><div class="wave">${bars}</div><div class="row" style="margin:0 18px"><span>Acoustic input</span><b class="blue">${s.event}</b></div></div><div class="panel"><div class="panel-head">Model result<span class="pill">SAMPLE VIEW</span></div><div style="padding:20px"><span class="muted">${s.status}</span><div class="result-score" style="font-size:34px">${s.metric}</div><div class="muted">${s.metricLabel}</div><div class="bar" style="margin:16px 0"><i style="width:90%"></i></div><div class="row"><span>MFCC extraction</span><b class="green">Complete</b></div><div class="row"><span>1D-CNN inference</span><b class="blue">Ready</b></div><p class="muted" style="margin-top:14px">Acoustic pattern screening · assistive prototype</p></div></div></div></div></div>`;};
  const kadaScene=(p,s)=>`<div class="window"><div class="mock kada">${chrome(p.name,p.tag)}<div class="mock-body" style="display:block"><div class="metric-row"><div class="metric"><strong>1,284</strong><span>sample registrations</span></div><div class="metric"><strong>78%</strong><span>check-in completion</span></div><div class="metric"><strong>12</strong><span>survey themes</span></div></div><div class="kada-grid"><div class="panel"><div class="panel-head">${s.title}<span class="pill">SAMPLE DATA</span></div><div class="chart">${[42,66,52,82,61,94,73,100,78].map((h,i)=>`<i style="--i:${i};--h:${h}%"></i>`).join('')}</div><div class="row" style="margin:0 15px 15px"><span>Registrations → Check-ins</span><b class="blue">Live telemetry</b></div></div><div class="panel"><div class="panel-head">Survey synthesis<span class="pill">LLM INSIGHTS</span></div><div style="padding:14px"><div class="insight"><b>Top theme · Session quality</b><br>${s.detail}</div><div class="insight"><b>Opportunity</b><br>Use response patterns to guide the next event iteration.</div><div class="row"><span>Form schema</span><b class="green">Dynamic</b></div></div></div></div></div></div></div>`;
  const render=(p,s)=>s.type==='image'?imageScene(p,s):s.type==='sign'?signScene(p,s):s.type==='sign-summary'?signSummary(p,s):s.type==='document'?documentScene(p,s):s.type==='audio'?audioScene(p,s):kadaScene(p,s);
  const profile=profiles[root.dataset.project]; if(!profile)return;
  const seconds=3.2, clip=document.createElement('div'); clip.id='preview-clip'; clip.className='clip'; clip.dataset.start='0'; clip.dataset.duration=String(profile.scenes.length*seconds); clip.dataset.trackIndex='0';
  clip.innerHTML=profile.scenes.map((s,i)=>`<section id="scene-${i}" class="scene${i===0?" is-active":""}">${render(profile,s)}</section>`).join(""); root.appendChild(clip);
  const scenes = Array.from(clip.querySelectorAll(".scene"));
  let active = 0;
  let timer = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const show = index => { scenes[active]?.classList.remove("is-active"); active = index; scenes[active]?.classList.add("is-active"); };
  const start = () => { if (reducedMotion || timer || scenes.length < 2) return; timer = window.setInterval(() => show((active + 1) % scenes.length), seconds * 1000); };
  const stop = () => { if (timer) window.clearInterval(timer); timer = null; };
  start();
  window.addEventListener("message", event => { if (event.data?.type !== "portfolio-preview") return; event.data.playing ? start() : stop(); });
})();

