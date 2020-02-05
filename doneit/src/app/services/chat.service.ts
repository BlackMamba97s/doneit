import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constant';
import { ChatMessage } from '../models/chat-message';
import { WebSocketAPI } from './WebSocketApi';

@Injectable({
  providedIn: 'root'
})
export class ChatService {




  constructor(private httpClient: HttpClient) { }




  // sendMessage(chatMessage) {
  //   return this.httpClient.post<any>(`${API_URL}/chat/send-message`, chatMessage);
  // }

  // getConversation(username) {
  //   return this.httpClient.get<ChatMessage[]>(`${API_URL}/chat/get-conversation/${username}`);

  // }
}
