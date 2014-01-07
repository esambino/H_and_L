// JavaScript File

/*---------------------------------------------------------------------------------------------------------------------------------------------------
// DOM Event Handlers //
Attribute      The event occurs when...                  IE    F    O     W3C
-----------------------------------------------------------------------------
onkeydown      A keyboard key is pressed                 3     1    No    Yes
onkeypress     A keyboard key is pressed or held down    3     1    9     Yes
onkeyup        A keyboard key is released                3     1    9     Yes
onmousedown    A mouse button is pressed                 4     1    9     Yes
onmousemove    The mouse is moved                        3     1    9     Yes
onmouseout     The mouse is moved off an element         4     1    9     Yes
onmouseover    The mouse is moved over an element        3     1    9     Yes
onmouseup      A mouse button is released                4     1    9     Yes
onresize       A window or frame is resized              4     1    9     Yes
onselect       Text is selected                          3     1    9     Yes
onunload       The user exits the page                   3     1    9     Yes

// Mouse / Keyboard Attributes //
Property         Description                                                                           IE    F    O    W3C
--------------------------------------------------------------------------------------------------------------------------
altKey           Returns whether or not the "ALT" key was pressed when an event was triggered          6     1    9    Yes
button           Returns which mouse button was clicked when an event was triggered                    6     1    9    Yes
clientX          Returns the horizontal coordinate of the mouse pointer when an event was triggered    6     1    9    Yes
clientY          Returns the vertical coordinate of the mouse pointer when an event was triggered      6     1    9    Yes
ctrlKey          Returns whether or not the "CTRL" key was pressed when an event was triggered         6     1    9    Yes
metaKey          Returns whether or not the "meta" key was pressed when an event was triggered         6     1    9    Yes
relatedTarget    Returns the element related to the element that triggered the event                   No    1    9    Yes
screenX          Returns the horizontal coordinate of the mouse pointer when an event was triggered    6     1    9    Yes
screenY          Returns the vertical coordinate of the mouse pointer when an event was triggered      6     1    9    Yes
shiftKey         Returns whether or not the "SHIFT" key was pressed when an event was triggered        6     1    9    Yes

// Other Event Attributes //
Property         Description                                                                                             IE    F    O    W3C
--------------------------------------------------------------------------------------------------------------------------------------------
bubbles          Returns a Boolean value that indicates whether or not an event is a bubbling event                      No    1    9    Yes
cancelable       Returns a Boolean value that indicates whether or not an event can have its default action prevented    No    1    9    Yes
currentTarget    Returns the element whose event listeners triggered the event                                           No    1    9    Yes
eventPhase       Returns which phase of the event flow is currently being evaluated                                                      Yes
target           Returns the element that triggered the event                                                            No    1    9    Yes
timeStamp        Returns the time stamp, in milliseconds, from the epoch (system start or event trigger)                 No    1    9    Yes
type             Returns the name of the event                                                                           6     1    9    Yes

---------------------------------------------------------------------------------------------------------------------------------------------------*/


/* Please add below style before </head> in HTML */

//<style type="text/css">
//body {
//    -moz-user-select : none;
//    -webkit-user-select: none;
//}
//</style>


function iEsc(){ return false; }
function iRec(){ return true; }
function DisableKeys() {
    if(event.ctrlKey || event.shiftKey || event.altKey) {
        window.event.returnValue=false;
        iEsc();}
}

document.ondragstart = iEsc;
document.onkeydown = DisableKeys;
document.oncontextmenu = iEsc;

if (typeof document.onselectstart !="undefined")
    document.onselectstart=iEsc;
else{
    document.onmousedown=iEsc;
    document.onmouseup=iRec;
}

function DisableRightClick(qsyzDOTnet){
    if (window.Event){
        if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3)
            iEsc();}
    else
        if (event.button == 2 || event.button == 3){
            event.cancelBubble = true
            event.returnValue = false;
            iEsc();}
}


function onKeyDown() {
    if ((event.altKey) || ((event.keyCode == 8) &&
    (event.srcElement.type != "text" &&
    event.srcElement.type != "textarea" &&
    event.srcElement.type != "password")) ||
    ((event.ctrlKey) && ((event.keyCode == 82))) ||
    (event.keyCode == 122)) {
        event.keyCode = 0;
        event.returnValue = false;
    }
}
onKeyDown();


// 清除剪貼簿
function accessClipboardData() {
    //if (!window.clipboardData.getData("Text")) {
    if (document.all) {
        // Using IE advanced features to clear RAM, replacing RAM content with an appropriate warning //
        window.clipboardData.clearData();

        try {
            // optional: replace clipboard's data
            window.clipboardData.setData(
            "Text", "配合應用系統個資管控,禁止剪貼各類圖像!!"
        );
        } catch (err) {
            // nothing
        }
    }
    //}
    return (false);
}
// 注意：開啟此定時項目(1/4秒)，將會把本機端剪貼簿內容清空置換，間接影響 PrintScreen 結果
setInterval("accessClipboardData()", 250);