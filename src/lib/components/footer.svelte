<script lang="ts">
    const currentYear = new Date().getFullYear();
  </script>
  
  <footer class="osrs-footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>OSRS House Planner</h3>
        <p>Plan your perfect Player-Owned House layout</p>
        <p class="disclaimer">This is a fan-made tool and is not affiliated with Jagex Ltd.</p>
      </div>
      
      <div class="footer-section">
        <h3>Resources</h3>
        <ul>
          <li><a href="https://oldschool.runescape.wiki/w/Construction" target="_blank" rel="noopener noreferrer">OSRS Wiki: Construction</a></li>
          <li><a href="https://oldschool.runescape.wiki/w/Player-owned_house" target="_blank" rel="noopener noreferrer">OSRS Wiki: Player-owned House</a></li>
          <li><a href="https://oldschool.runescape.wiki/w/Calculator:Construction" target="_blank" rel="noopener noreferrer">Construction Calculator</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Community</h3>
        <ul>
          <li><a href="https://www.reddit.com/r/2007scape/" target="_blank" rel="noopener noreferrer">r/2007scape</a></li>
          <li><a href="https://discord.com/invite/osrs" target="_blank" rel="noopener noreferrer">OSRS Discord</a></li>
        </ul>
      </div>
    </div>
    
    <div class="copyright">
      <p>© {currentYear} - OSRS House Planner</p>
      <p>Old School RuneScape and RuneScape are registered trademarks of Jagex Ltd.</p>
    </div>
  </footer>
  
  <style lang="scss">
    .osrs-footer {
      background-color: #262018;
      border-top: 2px solid #5a4a3a;
      color: #ece5ce;
      padding: 30px 0 15px;
      margin-top: 40px;
      background-image: url("/interface/footer-bg.png");
      background-repeat: repeat;
      
      .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 30px;
        
        @media (max-width: 767px) {
          flex-direction: column;
        }
      }
      
      .footer-section {
        flex: 1;
        min-width: 200px;
        
        h3 {
          color: #ff981f;
          border-bottom: 1px solid #5a4a3a;
          padding-bottom: 5px;
          margin-bottom: 15px;
          font-size: 18px;
        }
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          
          li {
            margin-bottom: 8px;
            
            a {
              color: #ece5ce;
              text-decoration: none;
              position: relative;
              padding-left: 15px;
              
              &:hover {
                color: #ff981f;
                text-decoration: underline;
              }
              
              &::before {
                content: "•";
                color: #ff981f;
                position: absolute;
                left: 0;
              }
            }
          }
        }
        
        .disclaimer {
          font-size: 12px;
          opacity: 0.7;
          margin-top: 15px;
        }
      }
      
      .copyright {
        border-top: 1px solid #5a4a3a;
        margin-top: 30px;
        padding-top: 15px;
        text-align: center;
        font-size: 12px;
        opacity: 0.7;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
        
        p {
          margin: 5px 0;
        }
      }
    }
  </style>