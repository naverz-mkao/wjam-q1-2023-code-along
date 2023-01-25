import { ZepetoPlayers, SpawnInfo, LocalPlayer } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { WorldService } from 'ZEPETO.World';

export default class CharacterLoader extends ZepetoScriptBehaviour {

    Start() {    
        //comment: loads in a character using the UserId
        //comment: TIP: WorldService.userId will give the user id of the user logged into Unity or the user logged in on device
        ZepetoPlayers.instance.CreatePlayerWithUserId("", WorldService.userId, new SpawnInfo(), true);

        //comment: this event function will call what ever function you pass it when the Local Player finishes loading in
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(
            //comment: this is an anonymous function that gets called when the Local Player finishes loading in
            () => { let _player : LocalPlayer = ZepetoPlayers.instance.LocalPlayer; }
        );
    }
}