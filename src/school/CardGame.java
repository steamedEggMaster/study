package school;

import java.util.ArrayList;
import java.util.Collections;

class Card { 
	String suit; // Hearts ♡: Diamonds ♢: Clubs ♣: Spades ♠: 
	String number; // "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K", "A" 
	public Card(String suit, String number) {
		this.suit = suit;
		this.number = number;}
	public String toString() { 
		//굉장히 자주 쓰이는 코드!!
		//자바 컴파일러가 객체를 print하면 자동으로 toString함수를 실행함.
		//오버라이드 하지않은 toString은 "클래스명@해시값"을 보여주기에 이렇게 코딩한것.
		return "(" + suit + " " + number + ")";} // (CLUB A)…
	 
}

class Deck {
	ArrayList<Card> deck = new ArrayList<Card>();
	String[] suits = { "CLUB", "DIAMOND", "HEART", "SPADE" };
	String[] numbers = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K", "A" };
	// 카드를 생성하여 덱에 넣는다.
	public Deck() {
		for (int i = 0; i < suits.length; i++)
			for (int j = 0; j < numbers.length; j++)
				deck.add(new Card(suits[i], numbers[j])); }
	// 카드를 섞는다.
	public void shuffle() {
		Collections.shuffle(deck); }
	// 덱의 처음에서 카드를 제거하여서 반환한다.
	public Card deal() {
		return deck.remove(0);
	}
}

class Player {
	ArrayList<Card> list = new ArrayList<Card>();
	public void getCard(Card card) {
		list.add(card);
	}
	public void showCards() {
		System.out.println(list); //이 코드. //for문으로 접근하는 것이 아님.
	}
	public int sum() {
		int result = 0;
		for(int i = 0; i<list.size(); i++) {
			String s = list.get(i).number;
			switch(s) {
			case "A" : result += 1; break;
			case "J" : result += 11; break;
			case "Q" : result += 12; break;
			case "K" : result += 13; break;
			default: result += Integer.parseInt(list.get(i).number);
			}
		}
		return result;
	}
}

public class CardGame {
	public static void main(String[] args) {
		Deck deck = new Deck();
		deck.shuffle();
		Player p1 = new Player();
		Player p2 = new Player();
		for(int i = 0; i < 5; i++) {
			p1.getCard(deck.deal());
			p2.getCard(deck.deal());
		}
		
		p1.showCards();
		p2.showCards();
		if(p1.sum() > p2.sum()) {
			System.out.println("p1="+p1.sum()+" vs. p2="+p2.sum()+"-> p1 win");
		}
		else
			System.out.println("p1="+p1.sum()+" vs. p2="+p2.sum()+"-> p2 win");
		
	}
}
