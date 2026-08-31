# 🎰 WinGo - Color & Number Prediction Game

A modern, interactive betting game website built with HTML, CSS, and JavaScript. Players can bet on colors, numbers, and sizes with various multipliers in a fast-paced gaming experience.

## 🎮 Features

### Game Modes
- **WinGo 30sec** - Fast-paced 30-second rounds
- **WinGo 1 Min** - 1-minute rounds
- **WinGo 3 Min** - 3-minute rounds
- **WinGo 5 Min** - 5-minute rounds

### Betting Options
- **Color Betting**: Green, Violet, Red
- **Number Betting**: 0-9 with color-coded balls
- **Size Betting**: Big (5-9) or Small (0-4)
- **Multipliers**: X1, X5, X10, X20, X50

### Payout Structure
| Bet Type | Color | Multiplier |
|----------|-------|-----------|
| Number | - | 9x |
| Color (Green/Red) | - | 2x |
| Color (Violet) | - | 4.5x |
| Size | - | 2x |

### Additional Features
- 💰 **Promotional Offers** - Daily bonuses and special promotions
- 🎡 **Lucky Wheel** - Spin daily for rewards
- 👥 **Referral Program** - Earn money by inviting friends
- 🏆 **Achievements** - Unlock badges and rewards
- 📊 **Game History** - Track all your recent games
- 💳 **Wallet Management** - Balance tracking and statistics

## 📁 Project Structure

```
wingo-betting-game/
├── index.html          # Main game page
├── promo.html          # Promotions page
├── wheel.html          # Lucky wheel page
├── earn.html           # Earning opportunities page
├── profile.html        # User profile & statistics
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── game.js         # Game logic & state management
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Installation
1. Clone the repository:
```bash
git clone https://github.com/filmera001-jpg/wingo-betting-game.git
cd wingo-betting-game
```

2. Open in your browser:
```bash
# Simply open index.html in your browser
# Or use a local server for better experience
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎯 How to Play

1. **Select Game Mode** - Choose from 30s, 1min, 3min, or 5min rounds
2. **Choose Your Bet** - Pick a color, number, or size
3. **Set Multiplier** - Select your betting multiplier (1x to 50x)
4. **Place Bet** - Click "Place Bet" button to confirm
5. **Wait for Results** - Game auto-evaluates when timer ends
6. **Check History** - View your recent game results

## 💾 Data Storage

The game uses **localStorage** to persist:
- User balance
- Game history
- User statistics (wins, losses, total bets)
- Promotions claimed status

No backend server is required - all data is stored locally in your browser!

## 🎨 UI/UX Features

- **Dark Theme** - Easy on the eyes with gold accents
- **Mobile Optimized** - Perfect for 414px mobile screens
- **Responsive Design** - Adapts to different screen sizes
- **Real-time Timer** - Dynamic countdown display
- **Status Messages** - Clear feedback for all actions
- **Smooth Animations** - Hover effects and transitions

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and flexbox
- **Vanilla JavaScript** - No dependencies, pure JS logic
- **LocalStorage API** - Client-side data persistence

## 📊 Game Logic

### Number to Color Mapping
```javascript
0, 5 → Violet
1, 3, 7, 9 → Green
2, 4, 6, 8 → Red
```

### Size Calculation
```javascript
0-4 → Small
5-9 → Big
```

### Bet Evaluation
- Numbers match exactly for 9x payout
- Colors match for 2x-4.5x payout
- Size matches for 2x payout

## 🎁 Promotion System

### Available Promotions
- Welcome Bonus: ₹100
- Daily Login Bonus: ₹50
- Winning Streak: ₹25
- Referral Program: ₹200 per friend
- Lucky Draw: ₹75

## 🎡 Lucky Wheel

- Spin once per day for free
- Prize pool: ₹50-₹200
- Automatically resets at midnight

## 📈 Statistics Tracking

Track your gaming performance:
- Total bets placed
- Win rate percentage
- Net profit/loss
- Total winnings
- Game history (last 10 rounds)

## 🔐 Responsible Gaming

⚠️ **Remember**: This is a game of chance. Please play responsibly and within your means.

## 🐛 Known Issues

- Betting window closes when timer reaches 5 seconds
- One bet per round limit
- Daily wheel spin limit (1 per day)

## 🚀 Future Enhancements

- [ ] Backend API integration for real multiplayer
- [ ] User authentication & cloud sync
- [ ] Sound effects & notifications
- [ ] Leaderboards
- [ ] Multiple currencies support
- [ ] Admin dashboard
- [ ] Push notifications
- [ ] Mobile app version

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**filmera001-jpg** - Initial work

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For issues, questions, or suggestions, please open an [issue](https://github.com/filmera001-jpg/wingo-betting-game/issues) on GitHub.

## 🎉 Acknowledgments

- Inspired by popular color prediction games
- Built with HTML5, CSS3, and Vanilla JavaScript
- No external libraries or dependencies

---

**Disclaimer**: This is a demonstration project. Real gambling involves actual money and risk. This game is for educational and entertainment purposes only.

**Made with ❤️ by filmera001-jpg**
