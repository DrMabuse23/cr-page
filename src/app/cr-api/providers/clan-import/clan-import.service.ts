import { environment } from '../../../../environments/environment';
import { Clan } from '../../models/clan.model';
import { Observable } from 'rxjs/Observable';
import { CrApiBase } from '../../utils/cr-api-base';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClanImportService extends CrApiBase {

  constructor(private httpClient: HttpClient) {
    super();
  }

  get url() {
    return `${this.baseUrl}/${this.clanId}`;
  }

  import(): Observable<Clan> {
    if (!environment.production) {
      return Observable.of(testJSON);
    }
    return <Observable<Clan>>this.httpClient.get(this.url);
  }
}
// tslint-disable: max-line-length
const testJSON: Clan = {
  'tag': '8CVPP8',
  'name': 'Stuttgart',
  'description': `Nur für aktive Mitglieder ü16/ Immer die max.
   Clantruhe💪/ 150 Spenden + 10 👑Pflicht/ Beitrittsanfragen bitte mit Vorstellung✌️`,
  'type': 'invite only',
  'score': 41249,
  'memberCount': 48,
  'requiredScore': 3800,
  'donations': 6916,
  'clanChest': {
    'status': 'inactive'
  },
  'badge': {
    'name': 'Crown_01',
    'category': '01_Symbol',
    'id': 16000012,
    'image': 'https://cr-api.github.io/cr-api-assets/badges/Crown_01.png'
  },
  'location': {
    'name': 'Germany',
    'isCountry': true,
    'code': 'DE'
  },
  'members': [
    {
      'name': 'PUSH3R',
      'tag': '2LG89GCY',
      'rank': 1,
      'previousRank': 1,
      'role': 'leader',
      'expLevel': 12,
      'trophies': 4798,
      'clanChestCrowns': 71,
      'donations': 196,
      'donationsReceived': 200,
      'donationsDelta': -4,
      'donationsPercent': 1.42,
      'arena': {
        'name': 'Challenger III',
        'arena': 'League 3',
        'arenaID': 15,
        'trophyLimit': 4600
      }
    },
    {
      'name': 'Taale96',
      'tag': 'JP8U9GP0',
      'rank': 2,
      'previousRank': 3,
      'role': 'coLeader',
      'expLevel': 12,
      'trophies': 4707,
      'clanChestCrowns': 95,
      'donations': 323,
      'donationsReceived': 200,
      'donationsDelta': 123,
      'donationsPercent': 2.34,
      'arena': {
        'name': 'Challenger III',
        'arena': 'League 3',
        'arenaID': 15,
        'trophyLimit': 4600
      }
    },
    {
      'name': 'Lokum',
      'tag': '2GVY9UGG',
      'rank': 3,
      'previousRank': 2,
      'role': 'coLeader',
      'expLevel': 12,
      'trophies': 4598,
      'clanChestCrowns': 153,
      'donations': 90,
      'donationsReceived': 240,
      'donationsDelta': -150,
      'donationsPercent': 0.65,
      'arena': {
        'name': 'Challenger II',
        'arena': 'League 2',
        'arenaID': 14,
        'trophyLimit': 4300
      }
    },
    {
      'name': 'LMNTRIX',
      'tag': '2QV02YL88',
      'rank': 4,
      'previousRank': 4,
      'role': 'coLeader',
      'expLevel': 12,
      'trophies': 4458,
      'clanChestCrowns': 10,
      'donations': 150,
      'donationsReceived': 160,
      'donationsDelta': -10,
      'donationsPercent': 1.08,
      'arena': {
        'name': 'Challenger II',
        'arena': 'League 2',
        'arenaID': 14,
        'trophyLimit': 4300
      }
    },
    {
      'name': 'Schnubberstern',
      'tag': '29QYQQ0P',
      'rank': 5,
      'previousRank': 5,
      'role': 'elder',
      'expLevel': 12,
      'trophies': 4361,
      'clanChestCrowns': 61,
      'donations': 206,
      'donationsReceived': 230,
      'donationsDelta': -24,
      'donationsPercent': 1.49,
      'arena': {
        'name': 'Challenger II',
        'arena': 'League 2',
        'arenaID': 14,
        'trophyLimit': 4300
      }
    },
    {
      'name': 'Reza372',
      'tag': '2VL99L8P',
      'rank': 6,
      'previousRank': 6,
      'role': 'member',
      'expLevel': 11,
      'trophies': 4252,
      'clanChestCrowns': 31,
      'donations': 70,
      'donationsReceived': 80,
      'donationsDelta': -10,
      'donationsPercent': 0.51,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'pid',
      'tag': '2JRJCQY0',
      'rank': 7,
      'previousRank': 9,
      'role': 'coLeader',
      'expLevel': 12,
      'trophies': 4230,
      'clanChestCrowns': 58,
      'donations': 230,
      'donationsReceived': 200,
      'donationsDelta': 30,
      'donationsPercent': 1.66,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'sanane_38',
      'tag': '8LUVY88L',
      'rank': 8,
      'previousRank': 15,
      'role': 'elder',
      'expLevel': 12,
      'trophies': 4197,
      'clanChestCrowns': 43,
      'donations': 244,
      'donationsReceived': 200,
      'donationsDelta': 44,
      'donationsPercent': 1.76,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'Sibro',
      'tag': '9P9JYUR2',
      'rank': 9,
      'previousRank': 10,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 4182,
      'clanChestCrowns': 28,
      'donations': 20,
      'donationsReceived': 40,
      'donationsDelta': -20,
      'donationsPercent': 0.14,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'vanKöbi',
      'tag': 'YPQL2G9R',
      'rank': 10,
      'previousRank': 7,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 4154,
      'clanChestCrowns': 21,
      'donations': 52,
      'donationsReceived': 200,
      'donationsDelta': -148,
      'donationsPercent': 0.38,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'Fabri',
      'tag': 'PUPC9PC2',
      'rank': 11,
      'previousRank': 8,
      'role': 'elder',
      'expLevel': 12,
      'trophies': 4117,
      'clanChestCrowns': 17,
      'donations': 204,
      'donationsReceived': 200,
      'donationsDelta': 4,
      'donationsPercent': 1.47,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'roman reigns',
      'tag': '2L0L9GCRC',
      'rank': 12,
      'previousRank': 12,
      'role': 'member',
      'expLevel': 11,
      'trophies': 4083,
      'clanChestCrowns': 24,
      'donations': 44,
      'donationsReceived': 80,
      'donationsDelta': -36,
      'donationsPercent': 0.32,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'salentos',
      'tag': 'G2LCYVLC',
      'rank': 13,
      'previousRank': 13,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 4073,
      'clanChestCrowns': 37,
      'donations': 167,
      'donationsReceived': 160,
      'donationsDelta': 7,
      'donationsPercent': 1.21,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'Lord84',
      'tag': 'PQCQJQCC',
      'rank': 14,
      'previousRank': 11,
      'role': 'elder',
      'expLevel': 12,
      'trophies': 4054,
      'clanChestCrowns': 39,
      'donations': 268,
      'donationsReceived': 240,
      'donationsDelta': 28,
      'donationsPercent': 1.94,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'Fuxx',
      'tag': '2UL8RCYY',
      'rank': 15,
      'previousRank': 14,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 4033,
      'clanChestCrowns': 41,
      'donations': 18,
      'donationsReceived': 80,
      'donationsDelta': -62,
      'donationsPercent': 0.13,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'slajaBoroda',
      'tag': '2LUUG00U',
      'rank': 16,
      'previousRank': 17,
      'role': 'elder',
      'expLevel': 12,
      'trophies': 4028,
      'clanChestCrowns': 26,
      'donations': 62,
      'donationsReceived': 160,
      'donationsDelta': -98,
      'donationsPercent': 0.45,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'Hong_K',
      'tag': '2GLQUJVJR',
      'rank': 17,
      'previousRank': 24,
      'role': 'member',
      'expLevel': 11,
      'trophies': 4010,
      'clanChestCrowns': 25,
      'donations': 386,
      'donationsReceived': 200,
      'donationsDelta': 186,
      'donationsPercent': 2.79,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'Bronko',
      'tag': '22PYQ0GCV',
      'rank': 18,
      'previousRank': 16,
      'role': 'member',
      'expLevel': 10,
      'trophies': 4005,
      'clanChestCrowns': 5,
      'donations': 88,
      'donationsReceived': 80,
      'donationsDelta': 8,
      'donationsPercent': 0.64,
      'arena': {
        'name': 'Challenger I',
        'arena': 'League 1',
        'arenaID': 13,
        'trophyLimit': 4000
      }
    },
    {
      'name': 'Jannik',
      'tag': '9JGYL0QY',
      'rank': 19,
      'previousRank': 18,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3982,
      'clanChestCrowns': 13,
      'donations': 154,
      'donationsReceived': 160,
      'donationsDelta': -6,
      'donationsPercent': 1.11,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Tafwolf292',
      'tag': 'GJ28Q9YC',
      'rank': 20,
      'previousRank': 30,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3969,
      'clanChestCrowns': 15,
      'donations': 126,
      'donationsReceived': 80,
      'donationsDelta': 46,
      'donationsPercent': 0.91,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'kitch',
      'tag': 'LCGR9VY',
      'rank': 21,
      'previousRank': 20,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3946,
      'clanChestCrowns': 12,
      'donations': 134,
      'donationsReceived': 200,
      'donationsDelta': -66,
      'donationsPercent': 0.97,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Lars',
      'tag': 'R0V9VUGQ',
      'rank': 22,
      'previousRank': 28,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3944,
      'clanChestCrowns': 69,
      'donations': 552,
      'donationsReceived': 240,
      'donationsDelta': 312,
      'donationsPercent': 3.99,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Yoda',
      'tag': '2GQ92GJYU',
      'rank': 23,
      'previousRank': 23,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 3940,
      'clanChestCrowns': 22,
      'donations': 78,
      'donationsReceived': 120,
      'donationsDelta': -42,
      'donationsPercent': 0.56,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Speznas',
      'tag': '8QPG0G2',
      'rank': 24,
      'previousRank': 22,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 3934,
      'clanChestCrowns': 39,
      'donations': 27,
      'donationsReceived': 200,
      'donationsDelta': -173,
      'donationsPercent': 0.2,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Munzur',
      'tag': 'PLU8VVCU',
      'rank': 25,
      'previousRank': 21,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3919,
      'clanChestCrowns': 8,
      'donations': 86,
      'donationsReceived': 120,
      'donationsDelta': -34,
      'donationsPercent': 0.62,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Emre',
      'tag': '9CYUPCQ8',
      'rank': 26,
      'previousRank': 25,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 3909,
      'clanChestCrowns': 15,
      'donations': 20,
      'donationsReceived': 40,
      'donationsDelta': -20,
      'donationsPercent': 0.14,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'SΔLΣΞH',
      'tag': '99GVJQQY',
      'rank': 27,
      'previousRank': 29,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3882,
      'clanChestCrowns': 0,
      'donations': 20,
      'donationsReceived': 120,
      'donationsDelta': -100,
      'donationsPercent': 0.14,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Sisko',
      'tag': '9QCRQULJ',
      'rank': 28,
      'previousRank': 27,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3879,
      'clanChestCrowns': 5,
      'donations': 150,
      'donationsReceived': 0,
      'donationsDelta': 150,
      'donationsPercent': 1.08,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Roberto',
      'tag': 'R9RLLG8Y',
      'rank': 29,
      'previousRank': 19,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3860,
      'clanChestCrowns': 16,
      'donations': 168,
      'donationsReceived': 120,
      'donationsDelta': 48,
      'donationsPercent': 1.21,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Lucas',
      'tag': '2JQ9CY28',
      'rank': 30,
      'previousRank': 32,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3823,
      'clanChestCrowns': 20,
      'donations': 286,
      'donationsReceived': 160,
      'donationsDelta': 126,
      'donationsPercent': 2.07,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Mopsi',
      'tag': '2LCLYRU2P',
      'rank': 31,
      'previousRank': 35,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3820,
      'clanChestCrowns': 33,
      'donations': 313,
      'donationsReceived': 160,
      'donationsDelta': 153,
      'donationsPercent': 2.26,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'RCW_himself',
      'tag': 'PYY8J2LC',
      'rank': 32,
      'previousRank': 31,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 3807,
      'clanChestCrowns': 18,
      'donations': 48,
      'donationsReceived': 70,
      'donationsDelta': -22,
      'donationsPercent': 0.35,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'Meister',
      'tag': '2CJYQLV20',
      'rank': 33,
      'previousRank': 26,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 3779,
      'clanChestCrowns': 45,
      'donations': 304,
      'donationsReceived': 160,
      'donationsDelta': 144,
      'donationsPercent': 2.2,
      'arena': {
        'name': 'Legendary Arena',
        'arena': 'Arena 12',
        'arenaID': 12,
        'trophyLimit': 3800
      }
    },
    {
      'name': 'DrMabuse',
      'tag': '80C2VUR2V',
      'rank': 34,
      'previousRank': 34,
      'role': 'elder',
      'expLevel': 10,
      'trophies': 3753,
      'clanChestCrowns': 45,
      'donations': 96,
      'donationsReceived': 120,
      'donationsDelta': -24,
      'donationsPercent': 0.69,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'volkitolki',
      'tag': '2RJCYLQQU',
      'rank': 35,
      'previousRank': 37,
      'role': 'elder',
      'expLevel': 10,
      'trophies': 3718,
      'clanChestCrowns': 63,
      'donations': 150,
      'donationsReceived': 200,
      'donationsDelta': -50,
      'donationsPercent': 1.08,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'DeathValley2',
      'tag': 'J9GRCCGC',
      'rank': 36,
      'previousRank': 33,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3685,
      'clanChestCrowns': 19,
      'donations': 48,
      'donationsReceived': 80,
      'donationsDelta': -32,
      'donationsPercent': 0.35,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'Linda',
      'tag': 'LVJJR8QL',
      'rank': 37,
      'previousRank': 39,
      'role': 'member',
      'expLevel': 10,
      'trophies': 3657,
      'clanChestCrowns': 10,
      'donations': 108,
      'donationsReceived': 120,
      'donationsDelta': -12,
      'donationsPercent': 0.78,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'Horscht',
      'tag': 'P2P8YPGC',
      'rank': 38,
      'previousRank': 38,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3624,
      'clanChestCrowns': 0,
      'donations': 86,
      'donationsReceived': 200,
      'donationsDelta': -114,
      'donationsPercent': 0.62,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'I.King',
      'tag': 'P0GQRVPU',
      'rank': 39,
      'previousRank': 44,
      'role': 'member',
      'expLevel': 12,
      'trophies': 3608,
      'clanChestCrowns': 19,
      'donations': 166,
      'donationsReceived': 176,
      'donationsDelta': -10,
      'donationsPercent': 1.2,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'Montigomo',
      'tag': '20G8LJGCR',
      'rank': 40,
      'previousRank': 36,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3607,
      'clanChestCrowns': 10,
      'donations': 126,
      'donationsReceived': 160,
      'donationsDelta': -34,
      'donationsPercent': 0.91,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'xXLOLXx',
      'tag': 'LU8JLRGQ',
      'rank': 41,
      'previousRank': 40,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 3567,
      'clanChestCrowns': 17,
      'donations': 40,
      'donationsReceived': 40,
      'donationsDelta': 0,
      'donationsPercent': 0.29,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'Nico✌',
      'tag': 'J0QU808',
      'rank': 42,
      'previousRank': 42,
      'role': 'member',
      'expLevel': 10,
      'trophies': 3540,
      'clanChestCrowns': 15,
      'donations': 20,
      'donationsReceived': 40,
      'donationsDelta': -20,
      'donationsPercent': 0.14,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'baumhausen',
      'tag': 'PYL99JRY',
      'rank': 43,
      'previousRank': 43,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3513,
      'clanChestCrowns': 16,
      'donations': 60,
      'donationsReceived': 200,
      'donationsDelta': -140,
      'donationsPercent': 0.43,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'Patrick 500',
      'tag': '9LJU90LQ',
      'rank': 44,
      'previousRank': 41,
      'role': 'elder',
      'expLevel': 11,
      'trophies': 3459,
      'clanChestCrowns': 26,
      'donations': 96,
      'donationsReceived': 120,
      'donationsDelta': -24,
      'donationsPercent': 0.69,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'XBannerX',
      'tag': 'JVQCCP2J',
      'rank': 45,
      'previousRank': 45,
      'role': 'member',
      'expLevel': 11,
      'trophies': 3432,
      'clanChestCrowns': 10,
      'donations': 98,
      'donationsReceived': 120,
      'donationsDelta': -22,
      'donationsPercent': 0.71,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'Steffi372',
      'tag': 'CUPJYCGY',
      'rank': 46,
      'previousRank': 46,
      'role': 'member',
      'expLevel': 10,
      'trophies': 3420,
      'clanChestCrowns': 30,
      'donations': 130,
      'donationsReceived': 160,
      'donationsDelta': -30,
      'donationsPercent': 0.94,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'Lizza',
      'tag': '280J292',
      'rank': 47,
      'previousRank': 47,
      'role': 'member',
      'expLevel': 10,
      'trophies': 3420,
      'clanChestCrowns': 10,
      'donations': 40,
      'donationsReceived': 80,
      'donationsDelta': -40,
      'donationsPercent': 0.29,
      'arena': {
        'name': 'Electro Valley',
        'arena': 'Arena 11',
        'arenaID': 11,
        'trophyLimit': 3000
      }
    },
    {
      'name': 'YOMAMA',
      'tag': 'PU8JGUUC',
      'rank': 48,
      'previousRank': 48,
      'role': 'member',
      'expLevel': 9,
      'trophies': 3003,
      'clanChestCrowns': 122,
      'donations': 368,
      'donationsReceived': 200,
      'donationsDelta': 168,
      'donationsPercent': 2.66,
      'arena': {
        'name': 'Hog Mountain',
        'arena': 'Arena 10',
        'arenaID': 10,
        'trophyLimit': 3000
      }
    }
  ]
};
