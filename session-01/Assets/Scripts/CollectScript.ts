import { AudioSource, Collider, Debug, GameObject, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import SoundManager from './SoundManager';

export default class CollectScript extends ZepetoScriptBehaviour {

    Start() {    

    }

    OnTriggerEnter(other: Collider) {
        //CODE: Use Debug.Log to log "Collect Coin" to the console when another game object with a collider enters the trigger that is on this game object
        
        //CODE: Call the PlayCoinCollectSoundInSoundManager function that's in this CollectScript class

        //CODE: Call the Destroy function inside the GameObject class to destroy the coin game object that this CollectScript is attached to
    }

    PlayCoinCollectSoundInSoundManager() {
        //CODE: Find game object named SoundManager using GameObject.Find,
        //      then get the SoundManager component that is on the SoundManager game object,
        //      and lastly call the PlayCoinCollectSound function that exist in the SoundManager class
    }

}










































































//====================ANSWERS====================
//Debug.Log("Collect Coin");
//this.PlayCoinCollectSoundInSoundManager();
//GameObject.Destroy(this.gameObject);
//GameObject.Find("SoundManager").GetComponent<SoundManager>().PlayCoinCollectSound();
