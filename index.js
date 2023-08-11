// GEARSHIFT BUTTON NEUTRAL-------------------------------------------------GEARSHIFT BUTTON NEUTRAL
showGearshifterNeutral();
function showGearshifterNeutral() {
    document.getElementById('gearshifter').innerHTML = /*HTML*/`
        <button style="grid-area: gearR;" onclick="showGearshifterReverse()">R</button>
        <button style="grid-area: gearN;" class="selected">N</button>
        <button style="grid-area: gear1;" onclick="showGearshifter1()">1</button>
        <div style="grid-area: gear2;">2</div>
        <div style="grid-area: gear3;">3</div>
        <div style="grid-area: gear4;">4</div>
        <div style="grid-area: gear5;">5</div>
        <div style="grid-area: gear6;">6</div>        
    `;
    showGearshifterLines();
}
// GEARSHIFT BUTTON REVERSE-------------------------------------------------GEARSHIFT BUTTON REVERSE
function showGearshifterReverse() {
    document.getElementById('gearshifter').innerHTML = /*HTML*/`
        <button style="grid-area: gearN;" onclick="showGearshifterNeutral()">N</button>
        <button style="grid-area: gearR;" class="selected">R</button>
        <div style="grid-area: gear1;">1</div>
        <div style="grid-area: gear2;">2</div>
        <div style="grid-area: gear3;">3</div>
        <div style="grid-area: gear4;">4</div>
        <div style="grid-area: gear5;">5</div>
        <div style="grid-area: gear6;">6</div>        
    `;
    showGearshifterLines();
}
// GEARSHIFT BUTTON 1-------------------------------------------------------------GEARSHIFT BUTTON 1
function showGearshifter1() {
    document.getElementById('gearshifter').innerHTML = /*HTML*/`
        <div style="grid-area: gearR;">R</div>
        <button style="grid-area: gearN;" onclick="showGearshifterNeutral()">N</button>
        <button style="grid-area: gear1;" class="selected">1</div>
        <button style="grid-area: gear2;"  onclick="showGearshifter2()">2</button>
        <div style="grid-area: gear3;">3</div>
        <div style="grid-area: gear4;">4</div>
        <div style="grid-area: gear5;">5</div>
        <div style="grid-area: gear6;">6</div>                 
    `;
    showGearshifterLines();
}
// GEARSHIFT BUTTON 2-------------------------------------------------------------GEARSHIFT BUTTON 2
function showGearshifter2() {
    document.getElementById('gearshifter').innerHTML = /*HTML*/`
        <div style="grid-area: gearR;">R</div>
        <div style="grid-area: gearN;">N</div>
        <button style="grid-area: gear1;"  onclick="showGearshifter1()">1</button>
        <button style="grid-area: gear2;" class="selected">2</button>
        <button style="grid-area: gear3;"  onclick="showGearshifter3()">3</button>
        <div style="grid-area: gear4;">4</div>
        <div style="grid-area: gear5;">5</div>
        <div style="grid-area: gear6;">6</div>         

    `;
    showGearshifterLines();
}
// GEARSHIFT BUTTON 3-------------------------------------------------------------GEARSHIFT BUTTON 3
function showGearshifter3() {
    document.getElementById('gearshifter').innerHTML = /*HTML*/`
        <div style="grid-area: gearR;">R</div>
        <div style="grid-area: gearN;">N</div>
        <div style="grid-area: gear1;">1</div>
        <button style="grid-area: gear2;" onclick="showGearshifter2()">2</button>
        <button style="grid-area: gear3;" class="selected">3</button>
        <button style="grid-area: gear4;" onclick="showGearshifter4()">4</button>
        <div style="grid-area: gear5;">5</div>
        <div style="grid-area: gear6;">6</div>        
    `;
    showGearshifterLines();
}
// GEARSHIFT BUTTON 4-------------------------------------------------------------GEARSHIFT BUTTON 4
function showGearshifter4() {
    document.getElementById('gearshifter').innerHTML = /*HTML*/`
        <div style="grid-area: gearR;">R</div>
        <div style="grid-area: gearN;">N</div>
        <div style="grid-area: gear1;">1</div>
        <div style="grid-area: gear2;">2</div>
        <button style="grid-area: gear3;" onclick="showGearshifter3()">3</button>
        <button style="grid-area: gear4;" class="selected">4</button>
        <button style="grid-area: gear5;" onclick="showGearshifter5()">5</button>
        <div style="grid-area: gear6;">6</div>        
    `;
    showGearshifterLines();
}
// GEARSHIFT BUTTON 5-------------------------------------------------------------GEARSHIFT BUTTON 5
function showGearshifter5() {
    document.getElementById('gearshifter').innerHTML = /*HTML*/`
        <div style="grid-area: gearR;">R</div>
        <div style="grid-area: gearN;">N</div>
        <div style="grid-area: gear1;">1</div>
        <div style="grid-area: gear2;">2</div>
        <div style="grid-area: gear3;">3</div>
        <button style="grid-area: gear4;" onclick="showGearshifter4()">4</button>
        <button style="grid-area: gear5;" class="selected">5</button>
        <button style="grid-area: gear6;" onclick="showGearshifter6()">6</button>        
    `;
    showGearshifterLines();
}
// GEARSHIFT BUTTON 6-------------------------------------------------------------GEARSHIFT BUTTON 6
function showGearshifter6() {
    document.getElementById('gearshifter').innerHTML = /*HTML*/`
        <div style="grid-area: gearR;">R</div>
        <div style="grid-area: gearN;">N</div>
        <div style="grid-area: gear1;">1</div>
        <div style="grid-area: gear2;">2</div>
        <div style="grid-area: gear3;">3</div>
        <div style="grid-area: gear4;">4</div>
        <button style="grid-area: gear5;" onclick="showGearshifter5()">5</button>
        <button style="grid-area: gear6;" class="selected">6</button>        
    `;
    showGearshifterLines();
}



// SHOW LINES BETWEEN GEARSHIFTS---------------------------------------SHOW LINES BETWEEN GEARSHIFTS
function showGearshifterLines() {
    document.getElementById('gearshifter').innerHTML += /*HTML*/`
        <div style="grid-area: a" class="right "></div>
        <div style="grid-area: b" class="bottom"></div>
        <div style="grid-area: c" class="right bottom"></div>
        <div style="grid-area: d" class=" bottom"></div>
        <div style="grid-area: e" class=" bottom right"></div>
        <div style="grid-area: f" class=" bottom"></div>
        <div style="grid-area: g" class=" bottom right"></div>
        <div style="grid-area: h"></div>
        <div style="grid-area: i" class="right "></div>
        <div style="grid-area: j"></div>
        <div style="grid-area: k" class="right "></div>
        <div style="grid-area: l"></div>
        <div style="grid-area: m" class=" right"></div>
        <div style="grid-area: n"></div>
        <div style="grid-area: o" class=" right"></div>
        <div style="grid-area: p"></div>
    `;
}