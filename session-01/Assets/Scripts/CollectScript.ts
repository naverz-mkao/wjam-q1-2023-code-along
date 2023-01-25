import { AudioSource, Collider, Debug, GameObject, Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import SoundManager from './SoundManager';

export default class CollectScript extends ZepetoScriptBehaviour {

    Start() {    

    }

    OnTriggerEnter(other: Collider) {
        //comment: logging "Collect Coin" to console when another game object with a collider enters the trigger that in on this game object
        Debug.Log("Collect Coin");
        
        //comment: call PlayCoinCollectSound function
        this.PlayCoinCollectSound();

        //comment: destroy the coin game object that this CollectScript is attached to
        GameObject.Destroy(this.gameObject);
    }

    PlayCoinCollectSound() {
        //comment: Find game object named SoundManager then get the SoundManager component and call the PlayCoinCollectSound function
        GameObject.Find("SoundManager").GetComponent<SoundManager>().PlayCoinCollectSound();
    }

}