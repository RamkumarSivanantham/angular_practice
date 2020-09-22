import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  addServer = false;
  serverCreationStatus = "No Server is created";
  serverName = '';
  serverCreated = false;
  servers = ['Apache', 'Tomcat'];

  constructor() {
    setTimeout(() => {
      this.addServer = true;
    }, 3000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server is created... The Server name is " + this.serverName;
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}