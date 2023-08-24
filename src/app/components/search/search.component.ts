import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText: string | undefined;
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
  }

  search() {
    this.gameService.searchByName(this.searchText!).subscribe(
      games => this.games = [games]
      );
  }
}
