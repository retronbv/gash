[Home](../README.md)

# Gash [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

This project uses [Blockly](https://github.com/google/blockly) to create a block-based editor for [Leopard](https://github.com/PullJosh/leopard). Currently in development

### Installation

```
git clone https://github.com/qucchia/gash.git
cd gash
npm install
```

Next, you have to install Leopard inside Gash. This folder is ignored by Gash's repository, so effectively the two repos (Gash and Leopard) are completely separate.
```
cd src
git clone https://github.com/PullJosh/leopard.git
cd leopard
npm install
```

### Running

```
# in the 'gash' folder:
npm run start
```

### Browse

Open [http://localhost:3000/](http://localhost:3000/)
