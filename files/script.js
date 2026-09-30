/* ============ CONTENIDO — SUSTITUIR AQUÍ TEXTOS, POEMAS Y FRASES ============ */
const OBJETOS = [ // Capítulo 2
  ['🐈','Obviamente hay un gato. Siempre debería haber un gato.'],
  ['🌷','Los tulipanes llegan sin hacer ruido y aun así se notan.'],
  ['🌼','No hace falta que sea enorme para hacer bonito un día.'],
  ['🌹','Delicado no significa frágil.'],
  ['📷','Hay momentos que quizá duran unos segundos, pero se quedan mucho más tiempo.'],
  ['✉️','Algunas palabras se sienten diferentes cuando alguien se tomó el tiempo de escribirlas.'],
  ['📖','Leer también cuenta como plan. Y de los mejores.'],
  ['☕','Algo caliente, frío afuera y nadie apurándote. Team frío aprueba.'],
  ['💎','Lo pequeño, si tiene sentido, vale más que lo caro.']
];
const FOTOS = [ // Capítulo 3: páginas en blanco. SUSTITUIR por fotos reales cuando existan (<img> dentro de <b>)
  'Aquí podría ir una captura random del boblox.',
  'Esta podria ser alguna captura de un juego de terror en boblox.',
  'Reservada para una foto de algo bonito que encontremos.',
  'Quizá aquí vaya una risa que todavía no ocurre.',
  'Un espacio para la primera de muchas fotos (Cualquier cosa KJASDKJ).',
  'Alguna captura de algun juego random?.'
];
const PLANES = [ // Capítulo 12
  'Una tarde de lluvia con un libro y algo caliente.',
  'Un capítulo de un k-drama sin culpa.',
  'Poner una canción que te guste y no hacer nada más.',
  'Fotografiar algo bonito que encuentres hoy.',
  'Escribir en un papelito algo que quieras recordar.',
  'Ver esa película que ya te sabes de memoria.',
  'Regalarle cinco minutos de silencio a la lluvia.',
  'Acomodar una flor donde puedas verla.',
  'Una siesta larga, sin alarma y sin culpa.',
  'Hacer un plan chiquito con tu hermana: un café, una caminata o una plática larga.',
  'Volver a ver una peli que se sienta como estar en casa.',
  'Reproducir tu playlist más nostálgica y mirar por la ventana.'
];
const GOTAS = [ // Capítulo 4
  'Hay tardes que no necesitan nada más que lluvia y un poco de calma.',
  'Lo frío también puede ser acogedor.',
  'Cada gota guarda un pedacito de cielo.',
  'Quedarse en casa también es un plan.',
  'Algunas cosas suenan mejor en voz baja.'
];
const OBRAS = [ // Capítulo 6
  ['Lo pequeño también cuenta.','Una flor en la mesa,<br>una nota sin razón,<br>un café que se enfría<br>mientras cae la tarde.<br>Lo pequeño también cuenta:<br>casi siempre es lo que se queda.','Óleo sobre cotidianidad.'],
  ['Tardes de lluvia.','La lluvia no pregunta nada,<br>golpea el vidrio bajito<br>como quien avisa<br>que no hay prisa en ningún lado.<br>Basta una manta, un libro<br>y nadie que apure.','Acuarela sobre cristal.'],
  ['Cosas hechas con cariño.','Una carta con tachones,<br>un detalle que no era caro,<br>una flor puesta donde se ve.<br>Se nota cuando alguien<br>lo pensó solo para ti.','Tinta, papel y un poco de paciencia.'],
  ['Guardar momentos.','Hay cosas que no caben en una foto<br>y aun así uno las guarda:<br>un chiste que entienden pocos,<br>una canción de fondo,<br>la luz de las seis de la tarde.','Tinta sobre papel doblado.']
];
const FLORES = [ // Capítulo 7
  ['🌷','Tulipán','Tallo firme, color suave.<br>Hay belleza que llega<br>sin hacer ruido.'],
  ['🌼','Gerbera','Un pedazo de día soleado<br>que decidió quedarse<br>en la mesa.'],
  ['🌹','Rosa','Cuidado y paciencia<br>en cada pétalo.<br>Lo delicado también sabe quedarse.'],
  ['🌷','Tulipán rosa','Un ramo pequeño alcanza<br>para cambiar el humor<br>de todo un cuarto.']
];
const CAJA = [ // Capítulo 8
  ['📷','Fotografía','Guardada boca abajo, para que la sorpresa siga intacta.'],
  ['✉️','Carta','Escrita a mano. Se nota en los tachones.'],
  ['🥀','Flor seca','Ya no huele igual, pero sigue siendo bonita.'],
  ['🎟️','Entrada','Función: Tarde de lluvia<br>Asiento: el más cómodo'],
  ['📝','Papelito','«Acordarse de lo que hizo reír.»'],
  ['🖼️','Polaroid','Aquí iría un recuerdo. Por ahora, solo luz.'],
  ['🌸','Pétalo','Uno solo basta para guardar una primavera.'],
  ['🗒️','Nota','Las cosas pequeñas también merecen caja.']
];

/* ============ CÓDIGO ============ */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const modal=$('#modal'),card=$('#card');
const say=h=>{card.innerHTML=h;modal.hidden=false};
modal.onclick=()=>modal.hidden=true;

// Portada
$('#open').onclick=()=>{$('#cbook').classList.add('opening');setTimeout(()=>{$('#cover').hidden=true;$('#book').hidden=false;go(0)},1300)};
$('#again').onclick=()=>go(0);

// Páginas
const pages=$$('.page');let cur=0,raf;
function go(n){
  cur=Math.max(0,Math.min(pages.length-1,n));
  $('#track').style.transform=`translateX(${-cur*100}%)`;
  $('#bar').style.width=(cur+1)/pages.length*100+'%';
  $('#lbl').textContent=pages[cur].dataset.t;
  pages[cur].scrollTop=0;rain(cur===3);pstop();
}
$('#prev').onclick=()=>go(cur-1);$('#next').onclick=()=>go(cur+1);
addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
let sx,sy;
$('#track').addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
$('#track').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>70&&Math.abs(dy)<50)go(cur+(dx<0?1:-1))},{passive:true});

// Cap. 1
$('#env').onclick=e=>{e.currentTarget.classList.add('gone');$('#letter').classList.add('show')};

// Cap. 2
OBJETOS.forEach(([e,t])=>{const b=document.createElement('button');b.textContent=e;b.onclick=()=>{$$('#desk .sel').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');$('#note').textContent='“'+t+'”'};$('#desk').append(b)});

// Cap. 3
FOTOS.forEach((t,i)=>{const n=String(i+1).padStart(2,'0'),p=document.createElement('button');p.className='pol';
  p.innerHTML=`<div class="f"><div><b>pronto</b><span>Por venir #${n}</span></div><div>${t}</div></div>`;
  p.onclick=()=>{p.classList.toggle('flip');if(p.classList.contains('flip')){const s=document.createElement('span');s.className='spark';s.textContent='✨';s.style.cssText='left:45%;top:40%';p.append(s);setTimeout(()=>s.remove(),1000)}};
  $('#album').append(p)});

// Cap. 4
$$('.drop').forEach(d=>d.onclick=()=>{d.classList.add('on');$('#dropmsg').textContent='“'+GOTAS[d.dataset.i]+'”'});
const cv=$('#rain'),cx=cv.getContext('2d');let ds=[];
function rain(on){
  cancelAnimationFrame(raf);if(!on)return;
  cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;
  ds=Array.from({length:60},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,l:8+Math.random()*14,v:3+Math.random()*4}));
  (function f(){cx.clearRect(0,0,cv.width,cv.height);cx.strokeStyle='rgba(200,220,245,.5)';cx.beginPath();
    ds.forEach(d=>{cx.moveTo(d.x,d.y);cx.lineTo(d.x-1,d.y+d.l);d.y+=d.v;if(d.y>cv.height){d.y=-20;d.x=Math.random()*cv.width}});
    cx.stroke();raf=requestAnimationFrame(f)})();
}

// Cap. 6
OBRAS.forEach(([t,p,d],i)=>{$('#museum').insertAdjacentHTML('beforeend',`<div class="frame"><small>OBRA ${String(i+1).padStart(2,'0')}</small><h3>${t}</h3><p class="poem">${p}</p><p>${d}</p></div>`)});

// Cap. 7
FLORES.forEach(([e,n,p],i)=>{const b=document.createElement('button');b.textContent=e;b.className='sway';b.style.animationDelay=i*.7+'s';b.setAttribute('aria-label',n);
  b.onclick=()=>say(`<b>${e}</b>${p}<small>${n}</small>`);$('#garden').append(b)});

// Cap. 8
CAJA.forEach(([e,n,t])=>{const b=document.createElement('button');b.textContent=e;b.setAttribute('aria-label',n);b.onclick=()=>say(`<b>${e}</b>${t}<small>${n}</small>`);$('#box').append(b)});

// Gatos escondidos
const eggs=$$('.egg'),found=new Set();let tt,won=0;
eggs.forEach((g,i)=>g.addEventListener('click',()=>{
  found.add(i);const t=$('#toast');
  t.textContent=found.size===eggs.length?'🐈 ¡Los encontraste a todos!':`🐈 Obviamente había un gato (${found.size}/${eggs.length})`;
  if(found.size===eggs.length&&!won){won=1;setTimeout(()=>say('<b>🎟️</b>Detalle inesperado:<br>Bieeeen descubriste el eastter egg ^^.<br>Solo para decirte que ahora ya te quiero mucho ^^ y que eres importante para mi actualmente.<small>— Marco</small>'),900)}
  t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2200);
  g.style.transform='scale(1.15) rotate(-4deg)';setTimeout(()=>g.style.transform='',400);
}));

// Cap. 9 · Pétalos (la caída la controla JS, así funciona aunque el teléfono reduzca animaciones)
let pn=0,pt,pr,ps=[],last=0;
function pstop(){clearInterval(pt);cancelAnimationFrame(pr)}
function pframe(t){
  const h=$('#arena').offsetHeight,dt=Math.min(t-last,50)/16;last=t;
  ps=ps.filter(o=>{o.y+=o.v*dt;o.r+=o.s*dt;if(o.y>h){o.el.remove();return false}
    o.el.style.transform=`translateY(${o.y}px) rotate(${o.r}deg)`;return true});
  pr=requestAnimationFrame(pframe)}
$('#pstart').onclick=()=>{
  pstop();pn=0;ps=[];$('#arena').innerHTML='';$('#pscore').textContent='Pétalos: 0 / 10';$('#pstart').textContent='Reiniciar';
  last=performance.now();pr=requestAnimationFrame(pframe);
  pt=setInterval(()=>{const el=document.createElement('button'),cat=Math.random()<.15;
    el.className='petal';el.textContent=cat?'🐈':'🌸';el.style.left=Math.random()*80+'%';
    const o={el,y:-40,r:0,v:1.6+Math.random()*1.6,s:(Math.random()-.5)*3};ps.push(o);
    el.onclick=()=>{el.remove();ps=ps.filter(x=>x!==o);pn+=cat?2:1;$('#pscore').textContent=`Pétalos: ${Math.min(pn,10)} / 10`;
      if(pn>=10){pstop();ps=[];$('#arena').innerHTML='';say('<b>🌸</b>Listo. Ya tienes suficientes pétalos para guardar una primavera.')}};
    $('#arena').append(el)},700)};

// Cap. 10 · Memorama
let flipped=[],moves=0,pairs=0;
function memo(){
  const m=$('#mem');m.innerHTML='';flipped=[];moves=0;pairs=0;$('#mmsg').textContent='Movimientos: 0';
  ['🌷','🌼','🌹','🐈','📖','☕'].flatMap(x=>[x,x]).sort(()=>Math.random()-.5).forEach(e=>{
    const c=document.createElement('button');c.className='mc';c.dataset.e=e;c.textContent='?';
    c.onclick=()=>{if(c.classList.contains('up')||flipped.length===2)return;c.classList.add('up');c.textContent=e;flipped.push(c);
      if(flipped.length===2){moves++;$('#mmsg').textContent='Movimientos: '+moves;const[a,b]=flipped;
        if(a.dataset.e===b.dataset.e){a.classList.add('ok');b.classList.add('ok');flipped=[];
          if(++pairs===6)setTimeout(()=>say(`<b>🐈</b>Lo lograste en ${moves} movimientos. Los gatos aprueban.`),400)}
        else setTimeout(()=>{[a,b].forEach(x=>{x.classList.remove('up');x.textContent='?'});flipped=[]},800)}};
    m.append(c)})}
$('#mreset').onclick=memo;memo();

// Cap. 11 · Ramo
const vase=$('#vase');
['🌷','🌼','🌹','🌸','🌺','🪻'].forEach(e=>{const b=document.createElement('button');b.textContent=e;
  b.onclick=()=>{if(vase.querySelector('.ph'))vase.innerHTML='';if(vase.children.length<7){const s=document.createElement('span');s.textContent=e;s.style.transform=`rotate(${Math.random()*30-15}deg)`;vase.append(s)}};$('#picks').append(b)});
$('#vclear').onclick=()=>vase.innerHTML='<span class="ph">tu ramo</span>';
$('#vsave').onclick=()=>{const n=vase.querySelectorAll('span:not(.ph)').length;
  say(n?`<b>${vase.textContent}</b>Ramo de ${n} flores. Nadie más tiene uno exactamente igual (enseñamelo si gustas con una captura ^^).`:'<b>🌱</b>Elige al menos una flor.')};

// Cap. 12 · Frasco
$('#jar').onclick=()=>{const s=$('#slip');s.textContent=PLANES[Math.floor(Math.random()*PLANES.length)];s.classList.remove('pop');void s.offsetWidth;s.classList.add('pop')};
