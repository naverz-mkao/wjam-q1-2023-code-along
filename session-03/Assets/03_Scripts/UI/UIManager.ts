import { TextMeshProUGUI } from 'TMPro';
import {GameObject, Vector2 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { PlayerTeam } from '../Game Management/GameManager';
import { GameState } from '../Game Management/Multiplay/ClientScript';
import UICharacterController from './UICharacterController';

export default class UIManager extends ZepetoScriptBehaviour {
    public uicontroller: UICharacterController;
    public messageText: TextMeshProUGUI;
    public timerText: TextMeshProUGUI;
    
    public titleUI: GameObject;
    
    public Init()
    {
        
    }
    
    public InitUI(uicontroller: UICharacterController)
    {
        this.uicontroller = uicontroller;
        this.SetUIState(GameState.Wait);
    }
    
    public SetUIState(state: GameState)
    {
        console.log("Setting State: " + state);
        if (state == GameState.Wait)
        {
            this.titleUI.SetActive(true);
            this.messageText.gameObject.SetActive(true);
            this.timerText.gameObject.SetActive(false);
        }
        else if (state == GameState.GameReady)
        {
            this.titleUI.SetActive(false);
            this.messageText.gameObject.SetActive(true);
            this.timerText.gameObject.SetActive(false);
        }
        else if (state == GameState.GameStart)
        {
            this.titleUI.SetActive(false);
            this.messageText.gameObject.SetActive(false);
            this.timerText.gameObject.SetActive(true);
        }
        else if (state == GameState.GameFinish)
        {
            this.titleUI.SetActive(false);
            this.messageText.gameObject.SetActive(true);
            this.timerText.gameObject.SetActive(false);
        }
    }

    UpdateMeetingTimer(timer: number)
    {
        this.timerText.text = timer.toString();
    }
    
    public SetTeam(team: PlayerTeam)
    {
        if (team == PlayerTeam.VIRUS)
        {
            this.UpdateUIConsole("You are the Virus. Go destroy the system!");
        }
        else if (team == PlayerTeam.SURVIVOR)
        {
            this.UpdateUIConsole("You are not the virus. Find the Virus and save zepeto!");
        }
        else if (team == PlayerTeam.GHOST)
        {
            this.UpdateUIConsole("You died... You can still help though, by completing missions!");
        }
    }
    
    public UpdateUIConsole(message: string)
    {
        this.messageText.text = message;
    }
}
