(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{227:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"setting-up-a-new-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-new-node"}},[e._v("#")]),e._v(" Setting Up a New Node")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Requires `desmos`")]),e._v(" "),t("p",[e._v("You need to "),t("router-link",{attrs:{to:"/install.html"}},[e._v("install "),t("code",[e._v("desmoscli")]),e._v(" and "),t("code",[e._v("desmosd")])]),e._v(" before going further.")],1)]),e._v(" "),t("p",[e._v("These instructions are for setting up a brand new full node from scratch.")]),e._v(" "),t("p",[e._v("First, initialize the node and create the necessary config files:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("desmosd init "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_custom_moniker"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.")])]),e._v(" "),t("p",[e._v("You can edit this moniker later, in the "),t("code",[e._v("~/.desmosd/config/config.toml")]),e._v(" file:")]),e._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# A custom human readable name for this node")]),e._v('\nmoniker = "<your_custom_moniker'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v('"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("You can edit the "),t("code",[e._v("~/.desmosd/config/app.toml")]),e._v(" file in order to enable the anti spam mechanism and reject incoming transactions with less than the minimum gas prices:")]),e._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This is a TOML config file.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# For more information, see https://github.com/toml-lang/toml")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##### main base config options #####")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The minimum gas prices a validator is willing to accept for processing a")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# transaction. A transaction's fees must meet the minimum of any denomination")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# specified in this config (e.g. 10uatom).")]),e._v("\n\nminimum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("gas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v('prices = ""\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[e._v("Your full node has been initialized!")]),e._v(" "),t("h2",{attrs:{id:"genesis-seeds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis-seeds"}},[e._v("#")]),e._v(" Genesis & Seeds")]),e._v(" "),t("h3",{attrs:{id:"copy-the-genesis-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-genesis-file"}},[e._v("#")]),e._v(" Copy the Genesis File")]),e._v(" "),t("p",[e._v("Fetch the mainnet's genesis.json file into "),t("code",[e._v("desmosd")]),e._v("'s config directory.")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/.desmosd/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://raw.githubusercontent.com/desmos-labs/morpheus/master/genesis.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/.desmosd/config/genesis.json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("Note we use the latest directory in the launch repo which contains details for the mainnet like the latest version and the genesis file.")]),e._v(" "),t("p",[e._v(":::"),t("br"),e._v("\nIf you want to connect to the public testnet instead, "),t("router-link",{attrs:{to:"/testnets/join-public.html"}},[e._v("click here")]),e._v("."),t("br"),e._v("\n:::")],1),e._v(" "),t("p",[e._v("To verify the correctness of the configuration run:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("desmosd start\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"add-seed-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-seed-nodes"}},[e._v("#")]),e._v(" Add Seed Nodes")]),e._v(" "),t("p",[e._v("Your node needs to know how to find peers. You'll need to add healthy seed nodes to "),t("code",[e._v("$HOME/.desmosd/config/config.toml")]),e._v(". The launch repo contains links to some seed nodes.")]),e._v(" "),t("p",[e._v("If those seeds aren't working, you can find more seeds and persistent peers on a Desmos explorer (a list can be found on the launch page).")]),e._v(" "),t("p",[e._v("You can also ask for peers on the "),t("a",{attrs:{href:"https://discord.gg/J6VsHDT",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord Validator Char"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"a-note-on-gas-and-fees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-note-on-gas-and-fees"}},[e._v("#")]),e._v(" A Note on Gas and Fees")]),e._v(" "),t("p",[e._v("Transactions on Desmos need to include a transaction fee in order to be processed. This fee pays for the gas required to run the transaction. The formula is the following:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("fees = ceil(gas * gasPrices)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The "),t("code",[e._v("gas")]),e._v(" is dependent on the transaction. Different transaction require different amount of "),t("code",[e._v("gas")]),e._v(". The "),t("code",[e._v("gas")]),e._v(" amount for a transaction is calculated as it is being processed, but there is a way to estimate it beforehand by using the "),t("code",[e._v("auto")]),e._v(" value for the "),t("code",[e._v("gas")]),e._v(" flag. Of course, this only gives an estimate. You can adjust this estimate with the flag "),t("code",[e._v("--gas-adjustment")]),e._v(" (default "),t("code",[e._v("1.0")]),e._v(") if you want to be sure you provide enough "),t("code",[e._v("gas")]),e._v(" for the transaction.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("gasPrice")]),e._v(" is the price of each unit of "),t("code",[e._v("gas")]),e._v(". Each validator sets a "),t("code",[e._v("min-gas-price")]),e._v(" value, and will only include transactions that have a "),t("code",[e._v("gasPrice")]),e._v(" greater than their "),t("code",[e._v("min-gas-price")]),e._v(".")]),e._v(" "),t("p",[e._v("The transaction "),t("code",[e._v("fees")]),e._v(" are the product of "),t("code",[e._v("gas")]),e._v(" and "),t("code",[e._v("gasPrice")]),e._v(". As a user, you have to input 2 out of 3. The higher the "),t("code",[e._v("gasPrice")]),e._v("/"),t("code",[e._v("fees")]),e._v(", the higher the chance that your transaction will get included in a block.")]),e._v(" "),t("h3",{attrs:{id:"set-minimum-gas-prices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-minimum-gas-prices"}},[e._v("#")]),e._v(" Set "),t("code",[e._v("minimum-gas-prices")])]),e._v(" "),t("p",[e._v("Your full-node keeps unconfirmed transactions in its mempool. In order to protect it from spam, it is better to set a "),t("code",[e._v("minimum-gas-prices")]),e._v(" that the transaction must meet in order to be accepted in your node's mempool. This parameter can be set in the following file "),t("code",[e._v("~/.desmosd/config/app.toml")]),e._v(".")]),e._v(" "),t("p",[e._v("The initial recommended "),t("code",[e._v("min-gas-prices")]),e._v(" is "),t("code",[e._v("0.025demos")]),e._v(", but you might want to change it later.")]),e._v(" "),t("h2",{attrs:{id:"run-a-full-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-a-full-node"}},[e._v("#")]),e._v(" Run a Full Node")]),e._v(" "),t("p",[e._v("Start the full node with this command:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("demosd start\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Check that everything is running smoothly:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("desmoscli status\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("View the status of the network with the "),t("a",{attrs:{href:"https://morpheus.bigdipper.live",target:"_blank",rel:"noopener noreferrer"}},[e._v("Desmos Explorer"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"export-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-state"}},[e._v("#")]),e._v(" Export State")]),e._v(" "),t("p",[e._v("Desmos can dump the entire application state to a JSON file, which could be useful for manual analysis and can also be used as the genesis file of a new network.")]),e._v(" "),t("p",[e._v("Export state with:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("desmosd "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(".json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("You can also export state from a particular height (at the end of processing the block of that height):")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("desmosd "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" --height "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("height"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(".json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("If you plan to start a new network from the exported state, export with the "),t("code",[e._v("--for-zero-height")]),e._v(" flag:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("desmosd "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" --height "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("height"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" --for-zero-height "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(".json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"verify-mainnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verify-mainnet"}},[e._v("#")]),e._v(" Verify Mainnet")]),e._v(" "),t("p",[e._v("Help to prevent a catastrophe by running invariants on each block on your full node. In essence, by running invariants you ensure that the state of mainnet is the correct expected state. One vital invariant check is that no "),t("code",[e._v("desmos")]),e._v(" are being created or destroyed outside of expected protocol, however there are many other invariant checks each unique to their respective module. Because invariant checks are computationally expensive, they are not enabled by default. To run a node with these checks start your node with the assert"),t("code",[e._v("-invariants-blockly")]),e._v(" flag:")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("desmosd start --assert-invariants-blockly\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("If an invariant is broken on your node, your node will panic and prompt you to send a transaction which will halt the mainnet. For example the provided message may look like:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("invariant broken:\n    loose token invariance:\n        pool.NotBondedTokens: 100\n        sum of account tokens: 101\n    CRITICAL please submit the following transaction:\n        desmoscli tx crisis invariant-broken staking supply\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("When submitting a invariant-broken transaction, transaction fee tokens are not deducted as the blockchain will halt (aka. this is a free transaction).")]),e._v(" "),t("h2",{attrs:{id:"upgrade-to-validator-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-to-validator-node"}},[e._v("#")]),e._v(" Upgrade to Validator Node")]),e._v(" "),t("p",[e._v("You now have an active full node. What's the next step? You can upgrade your full node to become a Desmos Validator. The top 100 validators have the ability to propose new blocks to the Desmos chain. Continue onto the "),t("router-link",{attrs:{to:"/validators/validator-setup.html"}},[e._v("Validator Setup")]),e._v(".")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);