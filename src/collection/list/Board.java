package collection.list;

public class Board {
	private String subject;
	private String content;
	private String writter;
	
	public Board(String subject, String content, String writter) {
		this.subject = subject;
		this.setContent(content);
		this.setWritter(writter);
	}
	
	public String getSubject() {return subject;}
	public void setSubject(String subject) { this.subject = subject;}

	public String getContent() {return content;}
	public void setContent(String content) {this.content = content;}

	public String getWritter() {return writter;}
	public void setWritter(String writter) {this.writter = writter;}
}