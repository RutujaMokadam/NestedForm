import { Component, OnInit } from '@angular/core';
import { CommanServiceService } from 'src/app/comman-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  productrecived:any;
  constructor(private recivedproduct:CommanServiceService) { }

  ngOnInit(): void {
    this.productrecived = this.recivedproduct.Finalselected;
  }

}
