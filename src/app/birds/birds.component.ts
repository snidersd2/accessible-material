import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'birds.component',
  templateUrl: 'birds.component.html',
  styleUrls: ['birds.component.css'],
})
export class FirstPageComponent{
  constructor(public dialog: MatDialog) {}

  openDialog1() {
    const dialogRef = this.dialog.open(BirdContent1, {
      height: '100px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(BirdContent2, {
      height: '100px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {}
}

@Component({
  selector: 'bird-content1',
  templateUrl: 'bird-content1.html',
})
export class BirdContent1 {}


@Component({
  selector: 'bird-content2',
  templateUrl: 'bird-content2.html',
})
export class BirdContent2 {}
