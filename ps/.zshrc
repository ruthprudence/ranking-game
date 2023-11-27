# Node Version Manager (NVM) Setup
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Reset PATH
export PATH=""

# Add Developer Binaries
export PATH="$PATH:/Users/ruth/Dropbox/Developer/bin"

# Add Homebrew Binaries
export PATH="$PATH:/opt/homebrew/bin:/opt/homebrew/sbin"

# Add MySQL
export PATH="$PATH:/usr/local/mysql-8.1.0-macos13-arm64/bin"

# System Paths (usually added by default, included for completeness)
export PATH="$PATH:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

# alias for runtime script
alias runtime="/usr/local/bin/runtime.sh"

echo $PATH
