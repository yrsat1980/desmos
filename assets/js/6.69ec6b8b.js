(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(e,t,a){"use strict";a.r(t);var s=a(9),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"developer-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-faq"}},[e._v("#")]),e._v(" Developer FAQ")]),e._v(" "),a("h2",{attrs:{id:"general-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-concepts"}},[e._v("#")]),e._v(" General Concepts")]),e._v(" "),a("h3",{attrs:{id:"what-is-a-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-transaction"}},[e._v("#")]),e._v(" What is a transaction?")]),e._v(" "),a("p",[e._v("As you know, the blockchain can be seen as a decentralized state machine that stores a state. A transaction is the method used by clients to tell the chain that som operations must be taken to change such current state.")]),e._v(" "),a("p",[e._v("Every transaction is composed of some common data (such as the account data of the sender, a "),a("code",[e._v("memo")]),e._v(", etc.) but the most important parts are "),a("a",{attrs:{href:"#what-is-a-message"}},[e._v("messages")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"what-is-a-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-message"}},[e._v("#")]),e._v(" What is a message?")]),e._v(" "),a("p",[e._v("A (transaction) message is the method that allows you to specify what action(s) should be done inside a transaction to change the current chain state. For example, inside Desmos we can use messages to tell the chain to store a new post, add a like to a post, comment on an existing post and many more.")]),e._v(" "),a("p",[e._v("To know more about all the different messages types and the associated actions that allow you to do, please go to the "),a("RouterLink",{attrs:{to:"/developers/perform-transactions.html"}},[e._v("transactions page")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"how-do-i-send-a-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-send-a-transaction"}},[e._v("#")]),e._v(" How do I send a transaction?")]),e._v(" "),a("p",[e._v("Sending a transaction is pretty straight forward. All what you need to have is access to an instance of an HD wallet associated with a Desmos account having some "),a("code",[e._v("desmos")]),e._v(" tokens inside. Once you have it, you simply need to:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create the proper JSON object containing the message(s) that you want to send as well as the account information of the sender.")])]),e._v(" "),a("li",[a("p",[e._v("Sign that JSON using the private key associated with the HD wallet of the transaction sender.")])]),e._v(" "),a("li",[a("p",[e._v("Put the signed JSON inside a bigger JSON object containing the un-signed transaction data.")])]),e._v(" "),a("li",[a("p",[e._v("Send the complete JSON to a full node REST API endpoint.")])])]),e._v(" "),a("p",[e._v("Please note that when sending transactions you are required to pay a "),a("strong",[e._v("fee")]),e._v(" so that the chain can sustain economically. To avoid paying a higher fee and wasting the user's funds, you should always "),a("strong",[e._v("put multiple messages inside the same transactions")]),e._v(". This will also decrease the overall execution of all messages and can allow you to save time and provide the users a better UX overall.")]),e._v(" "),a("h3",{attrs:{id:"how-long-does-transactions-take-to-be-executed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-long-does-transactions-take-to-be-executed"}},[e._v("#")]),e._v(" How long does transactions take to be executed?")]),e._v(" "),a("p",[e._v("Unluckily there is no way to know how long a transaction will take before being executed. The time that passes between it being received by a full node and it's actual execution and verification can vary a lot based on how many messages are inside, how complex each operation to perform is as well as how high the paid fees are.")]),e._v(" "),a("p",[e._v("If you want you can try speeding up the transactions execution by specifying a higher fee to be paid during the execution itself, but this might now change a lot if other users are doing the same.")]),e._v(" "),a("p",[e._v("Generally, however, transactions take not a very long time and most of the times they get executed in less than 10 seconds from when they are sent to the chain.")]),e._v(" "),a("h3",{attrs:{id:"what-s-the-best-way-to-know-when-a-transaction-is-performed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-best-way-to-know-when-a-transaction-is-performed"}},[e._v("#")]),e._v(" What's the best way to know when a transaction is performed?")]),e._v(" "),a("p",[e._v("Due to the fact that transactions can take up a different time to be executed (see "),a("a",{attrs:{href:"#how-long-does-transactions-take-to-be-executed"}},[e._v('"How long does transactions take to be executed"')]),e._v("), the best way a client has to stay updated on when a transaction will be executed is by using a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/WebSocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("Websocket"),a("OutboundLink")],1),e._v(". Each and every full node exposes a websocket that can be reached at the following URI:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ws://<full-node-host>/websocket\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If you want to know more about it, please refer to the "),a("RouterLink",{attrs:{to:"/developers/observe-data.html"}},[e._v("websocket page")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"developing-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developing-applications"}},[e._v("#")]),e._v(" Developing applications")]),e._v(" "),a("h3",{attrs:{id:"i-wrongly-did-an-operation-can-i-revert-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-wrongly-did-an-operation-can-i-revert-it"}},[e._v("#")]),e._v(" I wrongly did an operation. Can I revert it?")]),e._v(" "),a("p",[e._v("Unfortunately, due to the nature of the blockchain itself we cannot allow to revert any operations that have been done. For example, once you send a post to Desmos, it will stay there forever and everyone will be able to read it as it appeared when created.\nEven if you edit a post, the original one will always be there an people will be able to see that you made some changes. It's like trying to editing something that is public and written in a stone that cannot be destroyed.")]),e._v(" "),a("p",[e._v("For this reason, we suggest you to take "),a("strong",[e._v("all the possible precautions")]),e._v(" before sending any transaction to the chain.")]),e._v(" "),a("p",[e._v("As an example, you might not want to send a transaction for every post that the user creates, but instead store the locally created posts offline for a certain amount of time (i.e. 2 minutes) and later send the transactions. During this time, the user will still be able to delete the posts if he wants, but once synced on the chain you will no longer be able to take them down.")])])}),[],!1,null,null,null);t.default=o.exports}}]);