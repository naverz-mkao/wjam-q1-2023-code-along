import { Collider, Debug, Quaternion, Vector3 } from 'UnityEngine'
import { ZepetoCharacter } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class TeleportScript extends ZepetoScriptBehaviour {

    Start() {    

    }

    OnTriggerEnter(other: Collider) {
        //comment: logging name of game object that entered the trigger of the game object this TeleportScript is attached to
        Debug.Log(other.gameObject.name + " entered trigger");

        //comment: checking to see if game object that entered the trigger of the game object this TelepoertScript is attached to has a ZepetoCharacter component
        //this would mean that the your character actually tripped the trigger
        if (other.gameObject.GetComponent<ZepetoCharacter>())
        {
            //comment: teleport our character to position 0, 0, 0
            other.gameObject.GetComponent<ZepetoCharacter>().Teleport(new Vector3(0,0,0), Quaternion.identity);
        }
    }

}