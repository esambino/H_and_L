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

// �ŧi�n�d�I���ƥ�A�i�d�I���ƥ�M��аѦҤW�軡��
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

// �d�I�ƥ�B�z
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

// �M���ŶKï
function accessClipboardData() {
    //if (!window.clipboardData.getData("Text")) {
        if (document.all) {
            // Using IE advanced features to clear RAM, replacing RAM content with an appropriate warning //
            window.clipboardData.clearData();

            try {
                // optional: replace clipboard's data
                window.clipboardData.setData(
                "Text", "�t�X���Ψt�έӸ�ޱ�,�T��ŶK�U���Ϲ�!!"
            );
            } catch (err) {
                // nothing
            }
        }
    //}
    return (false);
}
// �`�N�G�}�Ҧ��w�ɶ���(1/4��)�A�N�|�⥻���ݰŶKï���e�M�Ÿm���A�����v�T PrintScreen ���G
setInterval("accessClipboardData()", 250);

// ������
function noSelect() {
    event.cancelBubble = true;
    event.returnValue = false;
    return (false);
}

// ���ׯS�w����欰
function getHelp() {
    //�ױ�PrintScreen
    if (event.keyCode == 42) {
        alert("�T�� PrintScreen ��I\n\nKeyCode�G" + event.keyCode);
        event.keyCode = 0;
        window.clipboardData.clearData();
        return (false);
	}
	
    //�ױ�F11 (Full Screen)
    if (event.keyCode == 122) {
        //alert("�T�� F11 ��I\n\nKeyCode�G" + event.keyCode);
        event.keyCode = 0;
        return (false);
    }
    
    //�ױ�Ctrl+P (Print)
    if (event.keyCode == 80 && event.ctrlKey) {
        //alert("�T�� Ctrl + P ��I\n\nCtrlKey�G" + event.ctrlKey + "\nKeyCode�G" + event.keyCode);
        event.keyCode = 0;
        return (false);
    }
    
    //�ױ�Ctrl+N (New Window)
    if (event.keyCode == 78 && event.ctrlKey) {
        //alert("�T�� Ctrl + N ��I\n\nCtrlKey�G" + event.ctrlKey + "\nKeyCode�G" + event.keyCode);
        return (false);
    }
    
    //�ױ�Ctrl+C (Copy)
    if (event.keyCode == 67 && event.ctrlKey) {
        //alert("�T�� Ctrl + C ��I\n\nCtrlKey�G" + event.ctrlKey + "\nKeyCode�G" + event.keyCode);
        //window.clipboardData.clearData();
        return (false);
    }
    
    //�ױ�Ctrl+X (Cut)
    if (event.keyCode == 88 && event.ctrlKey) {
        //alert("�T�� Ctrl + X ��I\n\nCtrlKey�G" + event.ctrlKey + "\nKeyCode�G" + event.keyCode);
        //window.clipboardData.clearData();
        return (false);
    }
    
    //�ױ�Ctrl+V (Paste)
    if (event.keyCode == 86 && event.ctrlKey) {
        //alert("�T�� Ctrl + V ��I\n\nCtrlKey�G" + event.ctrlKey + "\nKeyCode�G" + event.keyCode);
        //window.clipboardData.clearData();
        return (false);
    }
    
    //�ױ�Ctrl+A (Select All)
    if (event.keyCode == 65 && event.ctrlKey) {
        //alert("�T�� Ctrl + A ��I\n\nCtrlKey�G" + event.ctrlKey + "\nKeyCode�G" + event.keyCode);
        //window.clipboardData.clearData();
        return (false);
    }
}

// ���ץk����u�X
function notAct() {
    //accessClipboardData(); //�M�ŰŶKï�A�v�T PrintScreen ���G
    
    if (event.button == 2 || event.button == 3) {
        document.onContextMenu = function() { return (false); };
    }
    if (event.ctrlKey) {
        return (false);
    }
}

function document.oncontextmenu() {
    //alert("�T��ƹ��k��I");
    return (false);
}

function document.onselectstart() {
    //alert("�T��ƹ����(mark)�ϰ�\��I");
    event.returnValue = false;
    return (false);
}

function document.ondragstart() {
    //alert("�T��ƹ��즲(Drag)�\��I");
    window.event.returnValue = false;
    return (true);
}

// �����k����
function noContextMenu() {
    event.cancelBubble = true;
    event.returnValue = false;
    return (false);
}

// ���_�ƥ�
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
