import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { UserService } from '../../services/user/user.service';
import { NoticeI } from '../../models/notice.interface';


@Component({
  selector: 'app-show-notice',
  templateUrl: './show-notice.component.html',
  styleUrl: './show-notice.component.css'
})
export class ShowNoticeComponent implements OnInit {

  constructor(private apinotice: ApiService, private api: UserService) { }

  notice: NoticeI[] = [];
  ngOnInit(): void {
    this.showAllNotice();
  }

  showAllNotice() {
    this.apinotice.getAllNotice().subscribe(data => {
      console.log(data);
      this.notice = data;
    });
  }


}
