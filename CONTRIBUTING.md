# Contributing to WinGo Betting Game

Thank you for your interest in contributing to WinGo! We welcome contributions from everyone. This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions. We're committed to providing a welcoming and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

Before creating bug reports, check the issue list as you might find out that you don't need to create one. When you create a bug report, please include:

- **Clear title and description**
- **Steps to reproduce** the problem
- **Expected behavior** and **actual behavior**
- **Screenshots** if applicable
- **Browser and OS information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Rationale** for the feature
- **Possible implementation** ideas if applicable
- **Screenshots or mockups** if relevant

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** with clear, descriptive commits
   ```bash
   git commit -m "Add brief description of changes"
   ```

3. **Test thoroughly** before submitting
   - Test in multiple browsers
   - Test on mobile devices
   - Verify game logic works correctly

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** with:
   - Clear description of changes
   - Reference to related issues (e.g., "Closes #123")
   - Screenshots if UI changes are involved

## Development Setup

### Prerequisites
- A modern web browser
- A code editor (VS Code recommended)
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/filmera001-jpg/wingo-betting-game.git
   cd wingo-betting-game
   ```

2. Start a local server:
   ```bash
   python -m http.server 8000
   ```

3. Open in browser:
   ```
   http://localhost:8000
   ```

## Coding Standards

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Use meaningful class and ID names

### CSS
- Follow BEM naming convention where applicable
- Use CSS custom properties for colors
- Maintain consistent formatting

### JavaScript
- Use clear, descriptive variable names
- Add comments for complex logic
- Follow ES6+ best practices
- Keep functions small and focused
- Use const/let instead of var

### Example Code Style

```javascript
// Good
const calculatePayout = (betAmount, multiplier) => {
  return betAmount * multiplier;
};

// Avoid
var calculatePayout = function(amount, mult) {
  return amount * mult;
};
```

## File Structure Guidelines

```
wingo-betting-game/
├── index.html              # Main page
├── [page-name].html        # Feature pages
├── css/
│   └── styles.css          # All styling
├── js/
│   └── game.js             # Game logic
├── README.md               # Documentation
├── CONTRIBUTING.md         # This file
└── LICENSE                 # MIT License
```

## Commit Message Guidelines

Write clear, descriptive commit messages:

```
# Good
git commit -m "Add lucky wheel feature with daily spin limit"
git commit -m "Fix timer display showing incorrect seconds"
git commit -m "Refactor bet evaluation logic"

# Avoid
git commit -m "fix bug"
git commit -m "update stuff"
```

## Testing Checklist

Before submitting a PR, ensure:

- [ ] Code works in Chrome
- [ ] Code works in Firefox
- [ ] Code works in Safari
- [ ] Code works on mobile (414px width)
- [ ] No console errors
- [ ] LocalStorage data persists correctly
- [ ] Game logic calculations are correct
- [ ] UI is responsive and looks good

## Browser Compatibility

Maintain compatibility with:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Performance Guidelines

- Keep CSS file under 50KB
- Keep JS file under 100KB
- Images should be optimized
- No external CDN dependencies

## Documentation

- Update README.md if adding features
- Add comments for complex functions
- Document new game modes or betting types
- Include examples in comments

## Areas for Contribution

### High Priority
- [ ] Backend API integration
- [ ] User authentication system
- [ ] Sound effects/notifications
- [ ] Mobile app version

### Medium Priority
- [ ] Leaderboards
- [ ] Multiple language support
- [ ] Admin dashboard
- [ ] Advanced analytics

### Low Priority
- [ ] UI theme variations
- [ ] Additional achievements
- [ ] More game modes
- [ ] Improved animations

## Questions?

- Open an issue for questions
- Check existing issues for answers
- Read the README.md for more info

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Thank You!

We appreciate all contributions, big or small. Your help makes WinGo better! 🎉

---

**Last Updated**: August 31, 2026
