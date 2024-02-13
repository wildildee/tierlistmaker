import './App.css';
import Tierlist from './components/Tierlist';

export default function App() {

  // Tierlist data (will store serverside later and provide to the client via a REST request)
  const tierlistData = {
    "name": "Fall 2023 Anime OP Tier List",
    "author": "morgan2548510",
    "items": [
      {
        "name": "Sousou no Frieren",
        "back": "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
        "video": "https://www.youtube.com/watch?v=QoGM9hCxr4k",
        "comment": "[MAL](https://myanimelist.net/anime/52991/Sousou_no_Frieren)"
      },
      {
        "name": "Spy x Family Season 2",
        "back": "https://cdn.myanimelist.net/images/anime/1506/138982l.jpg",
        "video": "https://www.youtube.com/watch?v=gz--GkzpAf8",
        "comment": "[MAL](https://myanimelist.net/anime/53887/Spy_x_Family_Season_2)"
      },
      {
        "name": "Rising of the Shield Hero Season 3",
        "back": "https://cdn.myanimelist.net/images/anime/1317/139802l.jpg",
        "video": "https://www.youtube.com/watch?v=2vjoMYD4oZM",
        "comment": "[MAL](https://myanimelist.net/anime/40357/Tate_no_Yuusha_no_Nariagari_Season_3)"
      },
      {
        "name": "Goblin Slayer II",
        "back": "https://cdn.myanimelist.net/images/anime/1100/138338l.jpg",
        "video": "https://www.youtube.com/watch?v=LK6_f5I33R8",
        "comment": "[MAL](https://myanimelist.net/anime/47160/Goblin_Slayer_II)"
      },
      {
        "name": "Eminence in Shadow Season 2",
        "back": "https://cdn.myanimelist.net/images/anime/1622/139331l.jpg",
        "video": "https://www.youtube.com/watch?v=LQRbFCAHDUU",
        "comment": "[MAL](https://myanimelist.net/anime/54595/Kage_no_Jitsuryokusha_ni_Naritakute_2nd_Season)"
      },
      {
        "name": "The Apothecary Diaries",
        "back": "https://cdn.myanimelist.net/images/anime/1708/138033l.jpg",
        "video": "https://www.youtube.com/watch?v=z9JZB08qy44",
        "comment": "[MAL](https://myanimelist.net/anime/54492/Kusuriya_no_Hitorigoto)"
      },
      {
        "name": "Dr. Stone: New World Part 2",
        "back": "https://cdn.myanimelist.net/images/anime/1236/138696l.jpg",
        "video": "https://www.youtube.com/watch?v=TzZB-BOcpZY",
        "comment": "[MAL](https://myanimelist.net/anime/55644/Dr_Stone__New_World_Part_2)"
      },
      {
        "name": "Undead Unluck",
        "back": "https://cdn.myanimelist.net/images/anime/1136/138410l.jpg",
        "video": "https://www.youtube.com/watch?v=stzAsF51T_w",
        "comment": "[MAL](https://myanimelist.net/anime/52741/Undead_Unluck)"
      },
      {
        "name": "Shangri-La Frontier",
        "back": "https://cdn.myanimelist.net/images/anime/1500/139931l.jpg",
        "video": "https://www.youtube.com/watch?v=GasIaj6iNOU",
        "comment": "[MAL](https://myanimelist.net/anime/52347/Shangri-La_Frontier__Kusoge_Hunter_Kamige_ni_Idoman_to_su)"
      },
      {
        "name": "100 Girlfriends",
        "back": "https://cdn.myanimelist.net/images/anime/1812/136764l.jpg",
        "video": "https://www.youtube.com/watch?v=ZmA3O50cMTY",
        "comment": "[MAL](https://myanimelist.net/anime/54714/Kimi_no_Koto_ga_Daidaidaidaidaisuki_na_100-nin_no_Kanojo)"
      },
      {
        "name": "Tokyo Revengers: Tenjiku-hen",
        "back": "https://cdn.myanimelist.net/images/anime/1853/139843l.jpg",
        "video": "https://www.youtube.com/watch?v=tYuPxILnixw",
        "comment": "[MAL](https://myanimelist.net/anime/54918/Tokyo_Revengers__Tenjiku-hen)"
      },
      {
        "name": "The Kingdoms of Ruin",
        "back": "https://cdn.myanimelist.net/images/anime/1610/138189l.jpg",
        "video": "https://www.youtube.com/watch?v=2BYj_xynh8o",
        "comment": "[MAL](https://myanimelist.net/anime/54362/Hametsu_no_Oukoku)"
      },
      {
        "name": "Our Dating Story",
        "back": "https://cdn.myanimelist.net/images/anime/1848/140019l.jpg",
        "video": "https://www.youtube.com/watch?v=9raS4xWi250",
        "comment": "[MAL](https://myanimelist.net/anime/52990/Keikenzumi_na_Kimi_to_Keiken_Zero_na_Ore_ga_Otsukiai_suru_Hanashi)"
      },
      {
        "name": "Berserk of Gluttony",
        "back": "https://cdn.myanimelist.net/images/anime/1951/138462l.jpg",
        "video": "https://www.youtube.com/watch?v=X44Ovss0yLE",
        "comment": "[MAL](https://myanimelist.net/anime/53439/Boushoku_no_Berserk)"
      },
      {
        "name": "Ragna Crimson",
        "back": "https://cdn.myanimelist.net/images/anime/1763/140359l.jpg",
        "video": "https://www.youtube.com/watch?v=DUqKtA0CESs",
        "comment": "[MAL](https://myanimelist.net/anime/51297/Ragna_Crimson)"
      },
      {
        "name": "Ron Kamonohashi's Forbidden Deductions",
        "back": "https://cdn.myanimelist.net/images/anime/1799/137123l.jpg",
        "video": "https://www.youtube.com/watch?v=y1BuvBvcubo",
        "comment": "[MAL](https://myanimelist.net/anime/53879/Kamonohashi_Ron_no_Kindan_Suiri)"
      },
      {
        "name": "The Faraway Paladin: The Lord of the Rust Mountains",
        "back": "https://cdn.myanimelist.net/images/anime/1031/138515l.jpg",
        "video": "https://www.youtube.com/watch?v=V1jhJrx1l24",
        "comment": "[MAL](https://myanimelist.net/anime/50664/Saihate_no_Paladin__Tetsusabi_no_Yama_no_Ou)"
      },
      {
        "name": "A Returner's Magic Should Be Special",
        "back": "https://cdn.myanimelist.net/images/anime/1363/139744l.jpg",
        "video": "https://www.youtube.com/watch?v=YD_2CLazNbQ",
        "comment": "[MAL](https://myanimelist.net/anime/54852/Kikansha_no_Mahou_wa_Tokubetsu_desu)"
      },
      {
        "name": "Dead Mount Death Play Part 2",
        "back": "https://cdn.myanimelist.net/images/anime/1005/139809l.jpg",
        "video": "https://www.youtube.com/watch?v=-Yj-BxjG7SM",
        "comment": "[MAL](https://myanimelist.net/anime/54743/Dead_Mount_Death_Play_Part_2)"
      },
      {
        "name": "I'm in Love with the Villainess",
        "back": "https://cdn.myanimelist.net/images/anime/1531/137711l.jpg",
        "video": "https://www.youtube.com/watch?v=lBGRbAe_DYY",
        "comment": "[MAL](https://myanimelist.net/anime/53833/Watashi_no_Oshi_wa_Akuyaku_Reijou)"
      },
      {
        "name": "I'm Giving the Disgraced Noble Lady I Rescued a Crash Course in Naughtiness",
        "back": "https://cdn.myanimelist.net/images/anime/1720/139131l.jpg",
        "video": "https://www.youtube.com/watch?v=ym1XLltOmpM",
        "comment": "[MAL](https://myanimelist.net/anime/52934/Konyaku_Haki_sareta_Reijou_wo_Hirotta_Ore_ga_Ikenai_Koto_wo_Oshiekomu)"
      },
      {
        "name": "Girlfriend, Girlfriend Season 2",
        "back": "https://cdn.myanimelist.net/images/anime/1063/137100l.jpg",
        "video": "https://www.youtube.com/watch?v=KguhiQwYe6U",
        "comment": "[MAL](https://myanimelist.net/anime/53040/Kanojo_mo_Kanojo_Season_2)"
      },
      {
        "name": "The Ancient Magus' Bride Season 2 Part 2",
        "back": "https://cdn.myanimelist.net/images/anime/1518/136823l.jpg",
        "video": "https://www.youtube.com/watch?v=ri3rOZUIpIo",
        "comment": "[MAL](https://myanimelist.net/anime/55742/Mahoutsukai_no_Yome_Season_2_Part_2)"
      },
      {
        "name": "A Girl & Her Guard Dog",
        "back": "https://cdn.myanimelist.net/images/anime/1016/139805l.jpg",
        "video": "https://www.youtube.com/watch?v=TpSAgX8JtHs",
        "comment": "[MAL](https://myanimelist.net/anime/53300/Ojou_to_Banken-kun)"
      },
      {
        "name": "Migi & Dali",
        "back": "https://cdn.myanimelist.net/images/anime/1845/134817l.jpg",
        "video": "https://www.youtube.com/watch?v=CdOifCyi09U",
        "comment": "[MAL](https://myanimelist.net/anime/50586/Migi_to_Dali)"
      },
      {
        "name": "Tearmoon Empire",
        "back": "https://cdn.myanimelist.net/images/anime/1628/137847l.jpg",
        "video": "https://www.youtube.com/watch?v=-m6pBhkfOMU",
        "comment": "[MAL](https://myanimelist.net/anime/52962/Tearmoon_Teikoku_Monogatari__Dantoudai_kara_Hajimaru_Hime_no_Tensei_Gyakuten_Story)"
      },
      {
        "name": "Under Ninja",
        "back": "https://cdn.myanimelist.net/images/anime/1915/137896l.jpg",
        "video": "https://www.youtube.com/watch?v=1O5bALsN2uY",
        "comment": "[MAL](https://myanimelist.net/anime/49766/Under_Ninja)"
      },
      {
        "name": "MF Ghost",
        "back": "https://cdn.myanimelist.net/images/anime/1249/132348l.jpg",
        "video": "https://www.youtube.com/watch?v=5exjuYetg5I",
        "comment": "[MAL](https://myanimelist.net/anime/50695/MF_Ghost)"
      },
      {
        "name": "Overtake!",
        "back": "https://cdn.myanimelist.net/images/anime/1189/138916l.jpg",
        "video": "https://www.youtube.com/watch?v=UMav8qtZWbc",
        "comment": "[MAL](https://myanimelist.net/anime/54301/Overtake)"
      },
      {
        "name": "Shy",
        "back": "https://cdn.myanimelist.net/images/anime/1114/136742l.jpg",
        "video": "https://www.youtube.com/watch?v=2e_Zo9Jaw2M",
        "comment": "[MAL](https://myanimelist.net/anime/53237/Shy)"
      },
      {
        "name": "The Seven Deadly Sins: Four Knights of the Apocalypse",
        "back": "https://cdn.myanimelist.net/images/anime/1475/138530l.jpg",
        "video": "https://www.youtube.com/watch?v=7lpQxveooI4",
        "comment": "[MAL](https://myanimelist.net/anime/51794/Nanatsu_no_Taizai__Mokushiroku_no_Yonkishi)"
      },
      {
        "name": "The Family Circumstances of the Irregular Witch",
        "back": "https://cdn.myanimelist.net/images/anime/1918/138185l.jpg",
        "video": "https://www.youtube.com/watch?v=OKEXp5dAdCM&ab_channel=IsaiUHD",
        "comment": "[MAL](https://myanimelist.net/anime/52985/Dekoboko_Majo_no_Oyako_Jijou)"
      },
      {
        "name": "16bit Sensation: Another Layer",
        "back": "https://cdn.myanimelist.net/images/anime/1588/138395l.jpg",
        "video": "https://www.youtube.com/watch?v=yhYCblIxfU0",
        "comment": "[MAL](https://myanimelist.net/anime/54041/16bit_Sensation__Another_Layer)"
      },
      {
        "name": "My New Boss Is Goofy",
        "back": "https://cdn.myanimelist.net/images/anime/1630/138388l.jpg",
        "video": "https://www.youtube.com/watch?v=ZpTrq0JAAwc",
        "comment": "[MAL](https://myanimelist.net/anime/55310/Atarashii_Joushi_wa_Do_Tennen)"
      },
      {
        "name": "Butareba -The Story of a Man Who Turned into a Pig-",
        "back": "https://cdn.myanimelist.net/images/anime/1319/140965l.jpg",
        "video": "https://www.youtube.com/watch?v=h6OKTTE3w3A",
        "comment": "[MAL](https://myanimelist.net/anime/50583/Buta_no_Liver_wa_Kanetsu_Shiro)"
      },
      {
        "name": "Paradox Live the Animation",
        "back": "https://cdn.myanimelist.net/images/anime/1331/139478l.jpg",
        "video": "https://www.youtube.com/watch?v=pqEG4PgdNIw",
        "comment": "[MAL](https://myanimelist.net/anime/51956/Paradox_Live_the_Animation)"
      },
      {
        "name": "Protocol: Rain",
        "back": "https://cdn.myanimelist.net/images/anime/1160/138465l.jpg",
        "video": "https://www.youtube.com/watch?v=tsNhwrj8xQQ",
        "comment": "[MAL](https://myanimelist.net/anime/55894/Bokura_no_Ame-iro_Protocol)"
      },
      {
        "name": "KamiErabi GOD.app",
        "back": "https://cdn.myanimelist.net/images/anime/1862/138318l.jpg",
        "video": "https://www.youtube.com/watch?v=pL26sqTQS_4",
        "comment": "[MAL](https://myanimelist.net/anime/54798/Kamierabi)"
      },
      {
        "name": "Uma Musume: Pretty Derby Season 3",
        "back": "https://cdn.myanimelist.net/images/anime/1475/138948l.jpg",
        "video": "https://www.youtube.com/watch?v=gan5NEU4LTc",
        "comment": "[MAL](https://myanimelist.net/anime/53526/Uma_Musume__Pretty_Derby_Season_3)"
      },
      {
        "name": "Bullbuster",
        "back": "https://cdn.myanimelist.net/images/anime/1074/138192l.jpg",
        "video": "https://www.youtube.com/watch?v=g0fztmMLacA",
        "comment": "[MAL](https://myanimelist.net/anime/53633/Bullbuster)"
      },
      {
        "name": "HYPNOSISMIC -Division Rap Battle- Rhyme Anima PLUS",
        "back": "https://cdn.myanimelist.net/images/anime/1373/135316l.jpg",
        "video": "https://www.youtube.com/watch?v=wNYoMqgFwoM",
        "comment": "[MAL](https://myanimelist.net/anime/54858/Hypnosis_Mic__Division_Rap_Battle_-_Rhyme_Anima__)"
      },
      {
        "name": "Dark Gathering [Cour 2]",
        "back": "https://cdn.myanimelist.net/images/anime/1346/138731l.jpg",
        "video": "https://www.youtube.com/watch?v=E1szDXYzQGg",
        "comment": "[MAL](https://myanimelist.net/anime/52505/Dark_Gathering)"
      },
      {
        "name": "Jujutsu Kaisen Season 2 [Cour 2]",
        "back": "https://cdn.myanimelist.net/images/anime/1792/138022l.jpg",
        "video": "https://www.youtube.com/watch?v=5yb2N3pnztU",
        "comment": "[MAL](https://myanimelist.net/anime/51009/Jujutsu_Kaisen_2nd_Season)"
      },
      {
        "name": "One Piece [Cour IDK]",
        "back": "https://cdn.myanimelist.net/images/anime/1244/138851l.jpg",
        "video": "https://www.youtube.com/watch?v=yu-0eh9jdZg",
        "comment": "[MAL](https://myanimelist.net/anime/21/One_Piece)"
      },
    ]
  };
  return (
    <div className="App">
      <Tierlist data={tierlistData} />
    </div>
  );
}