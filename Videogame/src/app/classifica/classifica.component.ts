import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { bootstrapApplication } from '@angular/platform-browser';
@Component({
  selector: 'classifica',
  standalone: true,
  imports: [CommonModule,MatCardModule,CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './classifica.component.html',
  styleUrl: './classifica.component.css'
})
export class ClassificaComponent {
  persone = [

    {nome: "Bugha", eta:23 , nazionalita: "usa" , pers_pref: "MK-7" , link_pagina: "https://liquipedia.net/fortnite/Bugha", foto: "../../assets/1.jpg" },
    {nome: "Psalm", eta:29 , nazionalita: "usa" , pers_pref: "Pompa del Nonno" , link_pagina: "https://liquipedia.net/fortnite/Psalm", foto: "../../assets/2.png" },
    {nome: "EpikWhale", eta:21 , nazionalita: "usa" , pers_pref: "Fucile dassalto" , link_pagina: "https://liquipedia.net/fortnite/EpikWhale", foto: "../../assets/3.png" },
    {nome: "Kreo", eta:23 , nazionalita: "hong_kong" , pers_pref: "Fucile dassalto" , link_pagina: "https://liquipedia.net/fortnite/Kreo", foto: "../../assets/4.jpg" },
    {nome: "k1nG", eta:17 , nazionalita: "argentina" , pers_pref: "Fucile da caccia" , link_pagina: "https://liquipedia.net/fortnite/K1nG", foto: "../../assets/5.jpg" },
    {nome: "crue", eta:16 , nazionalita: "svezia" , pers_pref: "Pompa del Nonno" , link_pagina: "https://liquipedia.net/fortnite/Crue", foto: "../../assets/6.jpg" },
    {nome: "Skite", eta:24 , nazionalita: "france" , pers_pref: "Fucile da caccia" , link_pagina: "https://liquipedia.net/fortnite/Skite", foto: "../../assets/7.png" },
    {nome: "Nayte", eta:21 , nazionalita: "france" , pers_pref: "Mitraglietta" , link_pagina: "https://liquipedia.net/fortnite/Nayte", foto: "../../assets/8.jpg" },
    {nome: "Riversan", eta:21 , nazionalita: "usa" , pers_pref: "MK-7" , link_pagina: "https://liquipedia.net/fortnite/Riversan", foto: "../../assets/9.jpg" },
    {nome: "Fatch", eta:20 , nazionalita: "canada" , pers_pref: "Mitraglietta" , link_pagina: "https://liquipedia.net/fortnite/Fatch", foto: "../../assets/10.jpeg" },

   
 
  ]

  Pagina(asd: string){
    window.location.href = asd;
  }
}
