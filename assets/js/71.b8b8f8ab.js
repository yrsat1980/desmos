(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{424:function(e,t,s){"use strict";s.r(t);var a=s(9),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"upgrade-procedure-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure-workflow"}},[e._v("#")]),e._v(" Upgrade procedure workflow")]),e._v(" "),s("p",[e._v("As seen inside the "),s("RouterLink",{attrs:{to:"/validators/upgrades/automatic/overview.html"}},[e._v("overview")]),e._v(", Desmos now supports automatic proposal-based upgrades. Following you will find the description of the upgrading procedure that we will adopt from now on inside our chain.")],1),e._v(" "),s("h2",{attrs:{id:"upgrade-proposals-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-proposals-definition"}},[e._v("#")]),e._v(" Upgrade proposals definition")]),e._v(" "),s("p",[e._v("In order to make sure each validator upgrades its node in the correct moment in time, upgrades wil be proposed directly on-chain through the usage of "),s("strong",[e._v("upgrade proposals")]),e._v(".")]),e._v(" "),s("p",[e._v("Upgrade proposals are on-chain proposals that can be created by anyone from within the chain itself using the "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/gov/spec",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("x/gov")]),e._v(" module from the Cosmos SDK"),s("OutboundLink")],1),e._v(". Particularly, this kind of proposals contain an upgrade "),s("strong",[e._v("plan")]),e._v(".")]),e._v(" "),s("p",[e._v("An upgrade plan contains the following data:")]),e._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Plan specifies information about a planned upgrade and when it should occur")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" Plan "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Sets the name for the upgrade. This name will be used by the upgraded version of the software to apply any")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// special "on-upgrade" commands during the first BeginBlock method after the upgrade is applied. It is also used')]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// to detect whether a software version can handle a given upgrade. If no upgrade handler with this name has been")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// set in the software, it will be assumed that the software is out-of-date when the upgrade Time or Height")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// is reached and the software will exit.")]),e._v("\n\tName "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"name,omitempty"`')]),e._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The time after which the upgrade must be performed.")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Leave set to its zero value to use a pre-defined Height instead.")]),e._v("\n\tTime time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Time "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"time,omitempty"`')]),e._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The height at which the upgrade must be performed.")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Only used if Time is not set.")]),e._v("\n\tHeight "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("int64")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"height,omitempty"`')]),e._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Any application specific upgrade info to be included on-chain")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// such as a git commit that validators could automatically upgrade to")]),e._v("\n\tInfo "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"info,omitempty"`')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br")])]),s("p",[e._v("In order to create a simple upgrade proposal, the command that can be execute is the following:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("desmoscli tx gov submit-proposal software-upgrade "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<Upgrade name>"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --title "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<Proposal title>"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --description "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<Proposal description>"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --deposit "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Initial deposit"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --upgrade-height"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Upgrade height"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("While creating an upgrade proposal, the following data are "),s("strong",[e._v("required")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("the "),s("code",[e._v("title")]),e._v(" of the proposal")]),e._v(" "),s("li",[e._v("the "),s("code",[e._v("description")]),e._v(" of the proposal")]),e._v(" "),s("li",[e._v("the "),s("code",[e._v("upgrade-height")]),e._v(" "),s("strong",[e._v("or")]),e._v(" "),s("code",[e._v("upgrade-time")])])]),e._v(" "),s("p",[e._v("Optionally, an initial "),s("code",[e._v("deposit")]),e._v(" can be specified.")]),e._v(" "),s("h2",{attrs:{id:"upgrade-proposal-life-cycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-proposal-life-cycle"}},[e._v("#")]),e._v(" Upgrade proposal life cycle")]),e._v(" "),s("p",[e._v("Once that an upgrade proposal has been created, it needs to go through a series of steps before being accepted and finally trigger the update.")]),e._v(" "),s("p",[e._v("The first step it needs to go through is the "),s("strong",[e._v("deposit")]),e._v(" period. During this time, users can deposit their tokens into the proposal to make sure it will get into the next phase (voting period). If the proposal gathers enough tokens (defined by the "),s("code",[e._v("x/gov")]),e._v(" module params), then the deposited tokens will be returned to the depositor. Otherwise, if not enough tokens are deposited before the deposit time ends, all the deposited tokens will be burned.")]),e._v(" "),s("p",[e._v("Once that enough tokens have been deposited into the proposal, it then goes into the "),s("strong",[e._v("voting period")]),e._v(".  This period has a predefined length, which is established by the "),s("code",[e._v("x/gov")]),e._v(' params. Durign this period, any chain user can vote either "Yes", "No" or "No with veto" to the proposal. In order to pass, more than 75% of voting power need to vote into the proposal, and the 51% of votings must be "Yes". A 33% of "No with veto" will invalidate the proposal.')]),e._v(" "),s("p",[e._v("If the proposal passes, then the upgrade plan is put into action.")]),e._v(" "),s("h2",{attrs:{id:"validators-responsibility"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validators-responsibility"}},[e._v("#")]),e._v(" Validators responsibility")]),e._v(" "),s("p",[e._v("As a validator, if a proposal passes you will need to perform the following operations:")]),e._v(" "),s("p",[e._v("First of all, you need to checkout the proper Desmos version. The upgrade proposal will contain the details of what Desmos version should be used during the upgrade process.")]),e._v(" "),s("p",[e._v("In order to make sure the "),s("code",[e._v("upgrade_manager")]),e._v(" utility properly handles the upgrade, you need then to build the Desmos binary and put inside the correct folder on your machine. In order to do so run:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/desmos\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" build\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p ~/.desmosd/upgrade_manager/upgrades/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("upgrade-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" build/desmosd ~/.desmosd/upgrade_manager/upgrades/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("upgrade-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("Please note that the "),s("code",[e._v("<upgrade-name>")]),e._v(" placeholder should be replaced with the name of the upgrade that is put inside the upgrade proposal.")]),e._v(" "),s("h3",{attrs:{id:"scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[e._v("#")]),e._v(" Scripts")]),e._v(" "),s("p",[e._v("In order to make validators lives easier, during our testnet phase we will provide scripts that you can run in order to perform these tasks easily. We will also provide "),s("code",[e._v(".tar.gz")]),e._v(" files that can be downloaded and contain all the necessary data to get though upgrades.")]),e._v(" "),s("h3",{attrs:{id:"automatic-binaries-download"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automatic-binaries-download"}},[e._v("#")]),e._v(" Automatic binaries download")]),e._v(" "),s("p",[e._v("When creating upgrade proposals, from time to time we will also try to specify the binaries that should be automatically downloaded during the upgrade. This will be done following the "),s("a",{attrs:{href:"https://github.com/regen-network/cosmosd#auto-download",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("cosmosd")]),e._v(" specification"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("If you want, you can enable the "),s("code",[e._v("DAEMON_ALLOW_DOWNLOAD_BINARIES")]),e._v(" environmental variable during the "),s("RouterLink",{attrs:{to:"/validators/upgrades/automatic/setup.html"}},[e._v("setup")]),e._v(" in order to allow your node to auto download them and perform all the procedure by itself.")],1),e._v(" "),s("p",[e._v("However, please keep in mind that while this is fine to do in a test environment (i.e. the during the testnet phase), it is less OK to be done inside a production environment. You should always be caution with automatic operations and always be ready to manually override them if needed.")])])}),[],!1,null,null,null);t.default=n.exports}}]);