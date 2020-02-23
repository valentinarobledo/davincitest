import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { SurgeryComponent } from './components/surgery/surgery.component';
import { VisitComponent } from './components/visit/visit.component';


const routes: Routes = [
	{ path: 'appointment', component: AppointmentComponent},
	{ path: 'schedule', component: ScheduleComponent},
	{ path: 'surgery', component: SurgeryComponent},
	{ path: 'doctor', component: DoctorComponent},
	{ path: 'visit', component: VisitComponent},
	{ path: 'home', component: HomeComponent }

	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
