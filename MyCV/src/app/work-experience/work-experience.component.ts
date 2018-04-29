import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

	company1 = 'Randstad @ American Modern Insurance Group';
	position1 = 'Rating Analyst';
	date1 = '2015 - 2017';

  constructor() { }

  ngOnInit() {
  }

}
