import { Quaternion, Random, Time, Vector3 } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SpinScript extends ZepetoScriptBehaviour {

    //comment: declare public variables whose values can be set in the inspector
    public xSpeed:number;
    public ySpeed:number;
    public zSpeed:number;

    Start() {    

    }

    Update() {
        //comment: rotate game object using the values set in the inspector for xSpeed, ySpeed, and zSpeed
        this.transform.Rotate(new Vector3(this.xSpeed, this.ySpeed, this.zSpeed) * Time.deltaTime);
    }
}