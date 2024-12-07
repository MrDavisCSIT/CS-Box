let notValue = true;
let andValue = false;
let orValue = false;
let input1 = false;
let input2 = false;

const pageHeading = document.getElementById("pageHeading")?.textContent || "";

// **Toggle any gate input (e.g., input1, input2, or NOT gate)**
function toggleGate(gateType) {
    const gateKey = gateType === 'NOT' ? 'NotGate' : `Input${gateType}`;
    const gateSwitch = document.getElementById(`swt${gateKey}`);
    const isActive = gateType === '1' ? input1 : gateType === '2' ? input2 : notValue;

    const newValue = !isActive;
    if (gateType === '1') input1 = newValue;
    if (gateType === '2') input2 = newValue;
    if (gateType === 'NOT') notValue = newValue;

    gateSwitch?.classList.toggle('btnActive', newValue);

    updateGates();
}

// **Update AND, OR, and NOT gates based on the current input state**
function updateGates() {
    if (pageHeading === "AND Gate") updateGate('AndGate', input1 && input2);
    if (pageHeading === "OR Gate") updateGate('OrGate', input1 || input2);
    if (pageHeading === "NOT Gate") updateGate('NotGate', !notValue);
}

// **Toggle the output bulb for a gate (e.g., AndGate, OrGate, or NotGate)**
function updateGate(gateName, isActive) {
    const bulb = document.getElementById(`blb${gateName}`);
    if (!bulb) return;

    bulb.classList.toggle('poweredOn', isActive);
    bulb.classList.toggle('poweredOff', !isActive);
    
    if (gateName === 'AndGate') andValue = isActive;
    if (gateName === 'OrGate') orValue = isActive;
}

// **Reset the gate to its default state**
function resetGate() {
    if (pageHeading === "AND Gate" || pageHeading === "OR Gate") {
        resetInput('1');
        resetInput('2');
    } else if (pageHeading === "NOT Gate") {
        resetNotGate();
    }
    updateGates();
}

// **Reset the inputs for Input1 or Input2**
function resetInput(inputNumber) {
    if (inputNumber === '1') input1 = false;
    if (inputNumber === '2') input2 = false;

    const switchElement = document.getElementById(`swtInput${inputNumber}`);
    if (switchElement) switchElement.classList.remove('btnActive');
}

// **Reset the NOT gate to its default state**
function resetNotGate() {
    notValue = false; // NOT Gate logic is inverted, so this is "off" input
    const bulb = document.getElementById("blbNotGate");
    const switchElement = document.getElementById("swtNotGate");

    if (bulb) {
        bulb.classList.add('poweredOn'); // Light should be on
        bulb.classList.remove('poweredOff');
    }
    if (switchElement) {
        switchElement.classList.remove('btnActive'); // Button should be off (inactive)
    }
}
