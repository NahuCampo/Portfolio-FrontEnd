import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: Skills[] = [];

  constructor(private sSkills: SkillsService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkill():void{
    this.sSkills.lista().subscribe(data =>{this.skill = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sSkills.delete(id).subscribe(
        data=>{
          this.cargarSkill();
        }, err=>{
          alert("No se pudo eliminar")
        }
      )
    }
  }

}
