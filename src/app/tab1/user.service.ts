import { Injectable } from '@angular/core';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  users: User[] = [
    {
    id: 1,
    firstname: 'Mohamed',
    lastname: 'Ali',
    email: 'MohamedAli@gmail.com',
    dateOfBirth: '14 april 1994',
    gender: 'male',
    track: 'UI',
    profileImg: '../../assets/imgs/806962_user_512x512.png'
    },
    {
    id: 2,
    firstname: 'Mohamed',
    lastname: 'Ali',
    email: 'MohamedAli@gmail.com',
    dateOfBirth: '14 april 1994',
    gender: 'male',
    track: 'OS',
    profileImg: '../../assets/imgs/download (2).png'
    },
    {
    id: 3,
    firstname: 'Mohamed',
    lastname: 'Ali',
    email: 'MohamedAli@gmail.com',
    dateOfBirth: '14 april 1994',
    gender: 'male',
    track: 'SA',
    profileImg: '../../assets/imgs/images (2).png'
    },
    {
    id: 4,
    firstname: 'Samar',
    lastname: 'Ali',
    email: 'SamarAli@gmail.com',
    dateOfBirth: '14 april 1994',
    gender: 'female',
    track: 'SD',
    profileImg: '../../assets/imgs/images (3).png'
    },
    {
    id: 5,
    firstname: 'Laila',
    lastname: 'Kareem',
    email: 'LailaKareem@gmail.com',
    dateOfBirth: '14 april 1994',
    gender: 'female',
    track: 'UI',
    // tslint:disable-next-line:max-line-length
    profileImg: '../../assets/imgs/kisspng-computer-icons-avatar-user-profile-clip-art-women-avatar-5adad4eb3de418.5136220115242907952535.jpg'
    }
  ];

  constructor() { }

  getAllUsers() {
    return [...this.users];
  }


  addNewUser(newUser: User) {
    console.log('service ' + newUser);
    newUser.id = this.users.length + 1;
    this.users.push(newUser);
    console.log('new user added');
    console.log(this.users);
  }

  deleteUser(id) {
    this.users.forEach(element => {
      if (element.id === id) {
        this.users.splice( this.users.indexOf(element), 1);
      }
    });
  }
}

