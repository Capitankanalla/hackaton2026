// Chatbot functionality for MarketPulse
class MarketChatbot {
  constructor() {
    this.messagesContainer = document.getElementById('chatbot-messages');
    this.inputElement = document.getElementById('chatbot-input');
    
    this.init();
  }

  init() {
    // Add event listeners - only Enter key now (button removed)
    this.inputElement.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleSendMessage();
      }
    });

    // Load initial market data for chat context
    this.loadMarketData();
  }

  async loadMarketData() {
    try {
      // Get available markets
      const marketsResponse = await fetch('/api/markets');
      const markets = await marketsResponse.json();
      
      // Get top assets for context
      const topAssetsResponse = await fetch('/api/assets');
      const topAssets = await topAssetsResponse.json();
      
      this.contextData = { markets, topAssets };
    } catch (error) {
      console.error('Error loading market data:', error);
    }
  }

  async handleSendMessage() {
    const message = this.inputElement.value.trim();
    if (!message) return;

    // Add user message to chat
    this.addMessage(message, 'user');
    this.inputElement.value = '';

    // Show typing indicator
    const typingIndicator = this.addTypingIndicator();

    try {
      // Get bot response
      const response = await this.getBotResponse(message);
      
      // Remove typing indicator and add bot response
      this.messagesContainer.removeChild(typingIndicator);
      this.addMessage(response, 'bot');
    } catch (error) {
      this.messagesContainer.removeChild(typingIndicator);
      this.addMessage('Ho sento, estic tenint problemes per respondre. Prova més tard.', 'bot');
      console.error('Chat error:', error);
    }
  }

  addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender + '-message');
    messageDiv.textContent = text;
    this.messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  addTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('message', 'bot-message');
    typingDiv.id = 'typing-indicator';
    typingDiv.textContent = 'Escrivint...';
    this.messagesContainer.appendChild(typingDiv);
    
    // Scroll to bottom
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    
    return typingDiv;
  }

  async getBotResponse(userMessage) {
    // Simple response logic based on keywords
    const messageLower = userMessage.toLowerCase();
    
    if (messageLower.includes('preu') || messageLower.includes('precio')) {
      return "Pots consultar els preus dels actius a la part central de la pàgina. Fes clic en qualsevol actiu per veure'n el detall.";
    }
    
    if (messageLower.includes('millor') || messageLower.includes('guanyador')) {
      return "Els millors guanyadors del moment es poden veure a la secció 'Gainers / Losers' al costat esquerre. Els actius amb més augment de preu apareixen primer.";
    }
    
    if (messageLower.includes('perd') || messageLower.includes('perdedor')) {
      return "Els actius que estan perdent valor es mostren a la secció 'Gainers / Losers'. Els perdedors es mostren al final de la llista.";
    }
    
    if (messageLower.includes('mercats') || messageLower.includes('market')) {
      const markets = this.contextData?.markets?.map(m => m.market).join(', ') || 'España, USA, Europa, Asia';
      return `Els mercats disponibles són: ${markets}. Pots seleccionar-los al menú del header.`;
    }
    
    if (messageLower.includes('gràfica') || messageLower.includes('chart')) {
      return "La gràfica del mercat es mostra a la part central de la pàgina. Pots veure el preu d'un actiu en funció del temps.";
    }
    
    if (messageLower.includes('ajuda') || messageLower.includes('help')) {
      return "Puc ajudar-te a trobar informació sobre mercats, actius, gràfiques o preus. Prova preguntes com 'Quins són els millors guanyadors?' o 'Mostra el mercat USA'.";
    }
    
    // Default response
    return "Sóc un assistent de mercat. Puc ajudar-te a trobar informació sobre els actius, mercats i preus. Prova preguntar sobre 'millors guanyadors' o 'mercats disponibles'.";
  }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MarketChatbot();
});