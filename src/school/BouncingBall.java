package school;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.Timer;

public class BouncingBall extends JFrame implements ActionListener { // Timer ActionEvent
	static final int WIDTH = 600;
	static final int HEIGHT = 200;
	private static final int PERIOD = 10;
	class MyPanel extends JPanel {
		int x=0, y=0, xInc=3, yInc=3, diameter=60;
		int x1=120, y1=120, x1Inc=-5, y1Inc=-5;
		public void paintComponent(Graphics g) {
			super.paintComponent(g);
			if (x < 0 || x > (BouncingBall.WIDTH - diameter)) // 왼쪽 벽 or 오른쪽 벽에 닿으면
				xInc = -xInc;
			if (y < 0 || y > (BouncingBall.HEIGHT - diameter)) // 위 벽 or 아래 벽에 닿으면
				yInc = -yInc;
			x += xInc;
			y += yInc;
			g.setColor(Color.RED);
			g.fillOval(x, y, diameter, diameter);
			
			if (x1 < 0 || x1 > (BouncingBall.WIDTH - diameter)) // 왼쪽 벽 or 오른쪽 벽에 닿으면
				x1Inc = -x1Inc;
			if (y1 < 0 || y1 > (BouncingBall.HEIGHT - diameter)) // 위 벽 or 아래 벽에 닿으면
				y1Inc = -y1Inc;
			x1 += x1Inc;
			y1 += y1Inc;
			g.setColor(Color.BLUE);
			g.fillOval(x1, y1, diameter, diameter);
			
			if((x1 - x)*(x1 - x) + (y1 - y)*(y1 - y) <= 60*60) {
				if(x1 < x && y1 > y ) {
					if((xInc < 0 && x1Inc > 0) && (yInc > 0 && y1Inc < 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
						xInc = -xInc;
						x1Inc = -x1Inc;
					}
					else if((xInc < 0 && x1Inc < 0) && (yInc > 0 && y1Inc < 0)) {
						y1Inc = -y1Inc;
						yInc = -yInc;
						xInc = -xInc;
					}
					else if((xInc < 0 && x1Inc > 0) && (yInc > 0 && y1Inc > 0)) {
						x1Inc = -x1Inc;
						yInc = -yInc;
						xInc = -xInc;
					} //
					else if((xInc > 0 && x1Inc > 0) && (yInc > 0 && y1Inc < 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
						x1Inc = -x1Inc;
					}
					else if((xInc > 0 && x1Inc < 0) && (yInc > 0 && y1Inc < 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
					}//
					else if((xInc < 0 && x1Inc > 0) && (yInc < 0 && y1Inc < 0)) {
						xInc = -xInc;
						y1Inc = -y1Inc;
						x1Inc = -x1Inc;
					}
					else if((xInc < 0 && x1Inc > 0) && (yInc < 0 && y1Inc > 0)) {
						xInc = -xInc;
						x1Inc = -x1Inc;
					}//
					
				}
				else if(x1 > x && y1 < y) {
					if((xInc > 0 && x1Inc < 0) && (yInc < 0 && y1Inc > 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
						xInc = -xInc;
						x1Inc = -x1Inc;
					}
					else if((xInc > 0 && x1Inc < 0) && (yInc < 0 && y1Inc < 0)) {
						x1Inc = -x1Inc;
						yInc = -yInc;
						xInc = -xInc;
					}
					else if((xInc > 0 && x1Inc > 0) && (yInc < 0 && y1Inc > 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
						xInc = -xInc;
					} //
					else if((xInc > 0 && x1Inc > 0) && (yInc > 0 && y1Inc > 0)) {
						xInc = -xInc;
						x1Inc = -x1Inc;
					}
					else if((xInc > 0 && x1Inc < 0) && (yInc > 0 && y1Inc > 0)) {
						xInc = -xInc;
						yInc = -yInc;
						y1Inc = -y1Inc;
					}//
					else if((xInc < 0 && x1Inc > 0) && (yInc < 0 && y1Inc < 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
						x1Inc = -x1Inc;
					}
					else if((xInc < 0 && x1Inc > 0) && (yInc < 0 && y1Inc > 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
					}//
				}
				else if(x1 > x && y1 > y) {
					if((xInc > 0 && x1Inc < 0) && (yInc > 0 && y1Inc < 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
						xInc = -xInc;
						x1Inc = -x1Inc;
					}
					else if((xInc > 0 && x1Inc < 0) && (yInc < 0 && y1Inc > 0)) {
						y1Inc = -y1Inc;
						yInc = -yInc;
						xInc = -xInc;
					}
					else if((xInc > 0 && x1Inc > 0) && (yInc < 0 && y1Inc < 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
						xInc = -xInc;
					} //
					else if((xInc > 0 && x1Inc < 0) && (yInc < 0 && y1Inc < 0)) {
						y1Inc = -y1Inc;
						xInc = -xInc;
						x1Inc = -x1Inc;
					}
					else if((xInc > 0 && x1Inc < 0) && (yInc < 0 && y1Inc > 0)) {
						xInc = -xInc;
						x1Inc = -x1Inc;
					}//
					else if((xInc < 0 && x1Inc < 0) && (yInc > 0 && y1Inc < 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
						x1Inc = -x1Inc;
					}
					else if((xInc < 0 && x1Inc > 0) && (yInc > 0 && y1Inc < 0)) {
						yInc = -yInc;
						y1Inc = -y1Inc;
					}//
				}
			}
		}
	}
	public BouncingBall() {
		MyPanel panel = new MyPanel();
		panel.setPreferredSize(new Dimension(WIDTH, HEIGHT));
		add(panel);
		pack(); // 창(또는 프레임)의 크기를 자동으로 조정
		setTitle("Bouncing Ball");
		Timer timer = new Timer(PERIOD, this); // 지정된 간격으로 반복적으로 실행
		timer.start();
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
	@Override
	public void actionPerformed(ActionEvent evt) { // Timer 객체가 이벤트를 발생시킬 때마다 자동으로 호출
		repaint();
	}
	public static void main(String[] args) {
		BouncingBall f = new BouncingBall();
	}
}