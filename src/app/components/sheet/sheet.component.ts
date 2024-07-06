import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent {


  progressControl:FormGroup = new FormGroup({
    moderateGeneralConditionM:new FormControl('good'),
    moderateGeneralConditionN:new FormControl('good'),
    stableVitalSingsM : new FormControl('stable'),
    stableVitalSingsN : new FormControl('stable'),
    conciousLevelM : new FormControl('concious'),
    conciousLevelN : new FormControl('concious'),
    activityM : new FormControl('mild'),
    activityN : new FormControl('mild'),
    aniteriorFontanelM : new FormControl('at level'),
    aniteriorFontanelN : new FormControl('at level'),
    fistM : new FormControl('no'),
    fistN : new FormControl('no'),
    heartSoundsM : new FormControl('s1+s2'),
    heartSoundsN : new FormControl('s1+s2'),
    murmerM : new FormControl('systolic'),
    murmerN : new FormControl('systolic'),
    perfusionM : new FormControl('average'),
    perfusionN : new FormControl('average'),
    crtM : new FormControl('normal'),
    crtN : new FormControl('normal'),
    heartRateM : new FormControl('tachycardia'),
    heartRateN : new FormControl('tachycardia'),
    airEntryM : new FormControl('bilaterlal equal'),
    airEntryN : new FormControl('bilaterlal equal'),
    rdM : new FormControl('no rd'),
    rdN : new FormControl('no rd'),
    addedSoundsM : new FormControl('0'),
    addedSoundsN : new FormControl('0'),
    vomitingM : new FormControl('no'),
    vomitingN : new FormControl('no'),
    passStoolM : new FormControl('pass stool'),
    passStoolN : new FormControl('pass stool'),
    tolerateFeedingM : new FormControl('tolerate feeding'),
    tolerateFeedingN : new FormControl('tolerate feeding'),
    noOrganomegalyM : new FormControl('spleenomegally'),
    noOrganomegalyN : new FormControl('spleenomegally'),
    distensionM : new FormControl('distension'),
    distensionN : new FormControl('distension'),
    laxM : new FormControl('lax'),
    laxN : new FormControl('lax'),
  })
}
