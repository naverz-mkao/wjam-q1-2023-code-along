import { AudioSource } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SoundManager extends ZepetoScriptBehaviour {
    public CollectCoin: AudioSource;
    Start() {    

    }

    public PlayCoinCollectSound() {
        this.CollectCoin.Play();
    }
}