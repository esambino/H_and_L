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

if (jQuery) {
	$(document).ready(function() {
	    declareEvent();
	});
} else {
	window.onload = function() {
		declareEvent();
	}
}

// 宣告要攔截的事件，可攔截的事件清單請參考上方說明
function declareEvent() {
	// for IE
    if (window.Event) {
        enableExternalCapture();
        document.captureEvents(Event.Blur);
        document.captureEvents(Event.Click);
        document.captureEvents(Event.DragDrop);
        document.captureEvents(Event.Focus);
        document.captureEvents(Event.KeyDown);
        document.captureEvents(Event.KeyPress);
        document.captureEvents(Event.KeyUp);
        document.captureEvents(Event.MouseDown);
        document.captureEvents(Event.MouseUp);
        document.captureEvents(Event.Select);
        /*
        Abort
        Blur
        Click (revised)
        Change
        DblClick
        DragDrop
        Error
        Focus
        KeyDown
        KeyPress
        KeyUp
        Load
        MouseDown
        MouseMove
        MouseOut (revised)
        MouseOver (revised)
        MouseUp
        Move
        Reset
        Resize
        Select
        Submit
        Unload
        */
    }
    else {
    	// for Non-IE
    	if (event) {
            event.cancelBubble = true;
            event.returnValue = false;
        }
    }
};

// 攔截事件處理
function clickHandler(e) {
    if ((typeof property == 'undefined') || e == null) {
        //alert ("The window returned from routeEvent.");
        return (false);
    }
    //alert ("The window got an event of type: " + e.type + " and will call routeEvent.");
    window.routeEvent(e);
    
    //alert ("The window returned from routeEvent.");
    return (false);
}

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

// 不能選取
function noSelect() {
    event.cancelBubble = true;
    event.returnValue = false;
    return (false);
}

// 阻擋特定按鍵行為
function getHelp() {
    //擋掉PrintScreen
    if (event.keyCode == 42) {
        alert("禁止 PrintScreen 鍵！\n\nKeyCode：" + event.keyCode);
        event.keyCode = 0;
        window.clipboardData.clearData();
        return (false);
	}
	
    //擋掉F11 (Full Screen)
    if (event.keyCode == 122) {
        //alert("禁止 F11 鍵！\n\nKeyCode：" + event.keyCode);
        event.keyCode = 0;
        return (false);
    }
    
    //擋掉Ctrl+P (Print)
    if (event.keyCode == 80 && event.ctrlKey) {
        //alert("禁止 Ctrl + P 鍵！\n\nCtrlKey：" + event.ctrlKey + "\nKeyCode：" + event.keyCode);
        event.keyCode = 0;
        return (false);
    }
    
    //擋掉Ctrl+N (New Window)
    if (event.keyCode == 78 && event.ctrlKey) {
        //alert("禁止 Ctrl + N 鍵！\n\nCtrlKey：" + event.ctrlKey + "\nKeyCode：" + event.keyCode);
        return (false);
    }
    
    //擋掉Ctrl+C (Copy)
    if (event.keyCode == 67 && event.ctrlKey) {
        //alert("禁止 Ctrl + C 鍵！\n\nCtrlKey：" + event.ctrlKey + "\nKeyCode：" + event.keyCode);
        //window.clipboardData.clearData();
        return (false);
    }
    
    //擋掉Ctrl+X (Cut)
    if (event.keyCode == 88 && event.ctrlKey) {
        //alert("禁止 Ctrl + X 鍵！\n\nCtrlKey：" + event.ctrlKey + "\nKeyCode：" + event.keyCode);
        //window.clipboardData.clearData();
        return (false);
    }
    
    //擋掉Ctrl+V (Paste)
    if (event.keyCode == 86 && event.ctrlKey) {
        //alert("禁止 Ctrl + V 鍵！\n\nCtrlKey：" + event.ctrlKey + "\nKeyCode：" + event.keyCode);
        //window.clipboardData.clearData();
        return (false);
    }
    
    //擋掉Ctrl+A (Select All)
    if (event.keyCode == 65 && event.ctrlKey) {
        //alert("禁止 Ctrl + A 鍵！\n\nCtrlKey：" + event.ctrlKey + "\nKeyCode：" + event.keyCode);
        //window.clipboardData.clearData();
        return (false);
    }
}

// 阻擋右鍵選單彈出
function notAct() {
    //accessClipboardData(); //清空剪貼簿，影響 PrintScreen 結果
    
    if (event.button == 2 || event.button == 3) {
        document.onContextMenu = function() { return (false); };
    }
    if (event.ctrlKey) {
        return (false);
    }
}

function document.oncontextmenu() {
    //alert("禁止滑鼠右鍵！");
    return (false);
}

function document.onselectstart() {
    //alert("禁止滑鼠選取(mark)區域功能！");
    event.returnValue = false;
    return (false);
}

function document.ondragstart() {
    //alert("禁止滑鼠拖曳(Drag)功能！");
    window.event.returnValue = false;
    return (true);
}

// 關閉右鍵選單
function noContextMenu() {
    event.cancelBubble = true;
    event.returnValue = false;
    return (false);
}

// 中斷事件
function cancelEvent() {
    window.event.cancelBubble = true;
    window.event.returnValue = false;
    document.event.cancelBubble = true;
    document.event.returnValue = false;
    return (false);
}

//window.onafterprint
//window.onbeforeprint
//window.onbeforeunload
//window.onblur = accessClipboardData;
//window.onerror
//window.onfocus = accessClipboardData;
//window.onhelp
//window.onload
//window.onresize
//window.onscroll
//window.onunload
//window.onkeydown
//window.onkeypress
//window.onkeyup
//window.onmousedown
//window.onmousemove
//window.onmouseout
//window.onmouseover
//window.onmouseup
window.onselect = noSelect;

//document.onactivate
//document.onafterupdate
//document.onbeforeactivate
//document.onbeforedeactivate
//document.onbeforeeditfocus
//document.onbeforeupdate
//document.oncellchange
//document.onclick
//document.oncontextmenu = notAct;
//document.oncontrolselect
//document.ondataavailable
//document.ondatasetchanged
//document.ondatasetcomplete
//document.ondblclick
//document.ondeactivate
//document.ondragstart
//document.onerrorupdate
document.onfocusin = noSelect;
document.onfocusout = noSelect;
//document.onhelp
document.onkeydown = getHelp;
document.onkeypress = notAct;
//document.onkeyup = getHelp;
document.onmousedown = notAct;
//document.onmousemove
//document.onmouseout = accessClipboardData;
document.onmousepress = notAct;
//document.onmouseover = accessClipboardData;
//document.onmouseup = accessClipboardData;
//document.onmousewheel
//document.onpropertychange
//document.onreadystatechange
//document.onrowenter
//document.onrowexit
//document.onrowsdelete
//document.onrowsinserted
//document.onselectionchange
document.onselectstart = noSelect;
//document.onstop
//document.onresize
document.onselect = noSelect;
//document.onunload = accessClipboardData;
