import { Member } from '../../../cr-api/models/clan.model';
import { UserService } from '../../../user/providers/user/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Emotes } from '../../../shared/emotes.enum';
import { FightEventService } from '../../providers/fight-event/fight-event.service';
export class MemberModel implements Member {

  constructor(...args) {

  }
}
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  public form: FormGroup;
  public secondFormGroup: FormGroup;
  public emote: string;
  emoteShow = false;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: FightEventService,
    private router: Router,
    public userService: UserService
  ) {
    const now = new Date();
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    const later = new Date(now.getTime() + 864000000);

    const description = `Als Double knockout (auch Double-elimination) bezeichnet man eine Turnierform, die in ihren Grundzügen auf dem K.-o.-System beruht, jedoch versucht, dessen Schwächen zu umgehen. Die wesentlichen Unterschiede des Double-knockout-Formates im Gegensatz zum einfachen K.-o.-System (single knockout oder single elimination) sind:
    Ein Teilnehmer scheidet erst nach der zweiten Niederlage aus dem Turnier aus.
    Ein Teilnehmer kann trotz eines einmaligen Verlustes das Turnier gewinnen. Das ist im einfachen K.-o.-System auch dann ausgeschlossen, wenn zusätzliche Spiele abgehalten werden, um eine durchgehende Reihung zu erhalten: Der Verlierer eines Semifinalspieles kann bestenfalls den 3. Platz belegen, der Verlierer eines Viertelfinalspiels bestenfalls den 5. Platz etc.
    Es ist auch ohne Seeding (Setzen) sichergestellt, dass der zweitbeste Spieler den zweiten Platz belegt (vorausgesetzt bei jeder einzelnen Begegnung gewinnt der jeweilige Favorit).
    Bei gleicher Teilnehmeranzahl sind etwa doppelt so viele Spiele zu absolvieren wie beim K.-o.-System. (Nehmen n Spieler teil, werden 2n-2 Spiele benötigt.)
    `;

    this.form = this.formBuilder.group({
      from: [{ value: now.toISOString(), disabled: false }, [Validators.required]],
      to: [{ value: later.toISOString(), disabled: false }, [Validators.required]],
      name: [{ value: 'test', disabled: false }, [Validators.required]],
      description: [{ value: description, disabled: false }],
      players: this.formBuilder.group(new class <Member>{ }),
      tournamentType: [{ value: 'double-ko-system', disabled: false }]
    },
      { updateOn: 'blur' }
    );

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.matchPathFromEmote();
    this.form.valueChanges.subscribe(() => this.matchPathFromEmote());
  }

  matchPathFromEmote() {
    let _emote: string;

    if (!this.form.dirty) {
      _emote = Emotes.THUMBS;
    }

    if (this.form.dirty && !this.form.valid) {
      _emote = Emotes.ANGRY;
    }
    if (this.form.dirty && this.form.valid) {
      _emote = Emotes.THUMBS;
    }
    // console.log(_emote);
    if (_emote) {
      const path = `assets/emotes/${_emote}.png`;
      if (this.emote !== path) {
        this.emote = path;
        this.isViewable();
      }
    } else {
      this.emote = undefined;
    }
  }

  isViewable() {
    this.emoteShow = true;
    setTimeout(() => this.emoteShow = false, 1300);
  }

  setMembers($event) {
    debugger;
  }
  submit() {
    if (this.form.valid) {
      // this.eventService.addEvent({
      //   name: this.form.get('name').value,
      //   description: this.form.get('description').value
      // }, this.form.get('from').value, this.form.get('to').value)
      //   .subscribe((event) => {
      //     this.router.navigate([`/event/${event.id}`]);
      //   });
    } else {
      this.emote = undefined;
      this.matchPathFromEmote();
    }
  }
}
