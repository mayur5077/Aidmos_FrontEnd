import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  units:any;
  unitdata:any;
  id:any;

  constructor(private api:ApiService){}
  ngOnInit(): void {

    this.load();



  }

  load(){

    this.unitdata = new FormGroup({
      id:new FormControl(0),
      name:new FormControl("")

    })
    this.api.get("Units").subscribe((result:any)=>{
      this.units = result;
      console.log(result);

    })

  }

  savedata(data:any){
    if(this.id != null){
    this.api.post("Units",data).subscribe((result:any)=>{
      console.log(result);
      this.load();

    })
  }
  else{
    this.api.put("Units/" +this.id,data).subscribe((result:any)=>{
      console.log(result);
      this.load();

    })
  }


  }
  deletedata(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete("Units/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })

  }

  edit(id:number){
    if(id != null){
      this.id = id;
    this.api.get("Units/"+id).subscribe((result:any)=>{
      console.log(result);
      this.unitdata.patchValue({
        id:result.id,
        name:result.name
      })


    })
    }
  }


}
