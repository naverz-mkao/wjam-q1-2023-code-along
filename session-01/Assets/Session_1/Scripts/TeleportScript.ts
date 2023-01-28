import { Collider, Debug, Quaternion, Vector3 } from 'UnityEngine'
import { ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class TeleportScript extends ZepetoScriptBehaviour {

    Start() {    

    }

    OnTriggerEnter(other: Collider) {
        //CODE: Use Debug.Log to log the name of game object that entered the trigger of the game object this TeleportScript is attached to
        Debug.Log(other.gameObject.name + " entered trigger");

        //TIP:  This if block checks to see if game object that entered the trigger of the game object this TeleportScript is attached to has a ZepetoCharacter component attached to it
        //      Only a ZEPETO character would have a ZepetoCharacter component attached to it, so this would mean a ZEPETO character triggered the trigger
        if (other.gameObject.GetComponent<ZepetoCharacter>())
        {
        //CODE: Get the ZepetoCharacter component through the Collider name other that was pass into OnTriggerEnter
        //      Call the Teleport function that exist in the ZepetoCharacter class, and teleport to position 0 for x, 0 for y, and 0 for z
            other.gameObject.GetComponent<ZepetoCharacter>().Teleport(new Vector3(0,0,0), Quaternion.identity);
        }
    }

}