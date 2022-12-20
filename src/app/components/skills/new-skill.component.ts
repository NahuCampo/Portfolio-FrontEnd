import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  
  nombre: string = '';
  porcentaje: number;

  constructor(private sSkills: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const skill = new Skills(this.nombre, this.porcentaje);
    this.sSkills.save(skill).subscribe(
      data => {
        alert("Skill añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
