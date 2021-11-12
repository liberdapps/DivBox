const App = {

  networkId: null,
  contractAddress: '0x37cF0b54D42f15aae494ED4D5cE32737fEFBF0dE',
  contractABI:  [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_cEtherContractAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "MAX_SHARES",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "buyShares",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractOwner",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_sharesToSell",
          "type": "uint256"
        }
      ],
      "name": "sellShares",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sharePrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "status",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "totalDividendsOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawDevFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawDividends",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawableDevFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "withdrawableDividendsOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "withdrawnDividendsOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  smartSavingsContract: null,
  walletAddress: null,
  latestStatus: null,
  errorMessages: {
    "ERR_001": "Please provide some ether to buy shares.",
    "ERR_002": "Maximum number of shares reached. Please try again later.",
    "ERR_003": "Too much ether provided. Please try a smaller amount.",
    "ERR_004": "No additional shares could be bought. Please try again with a higher amount.",
    "ERR_005": "Maximum number of shares exceeded. Please try again with a smaller amount.",
    "ERR_006": "Failure communicating with Compound (Code: 6). Please try again later.",
    "ERR_007": "No shares specified.",
    "ERR_008": "Not enough shares to sell. Please specify fewer shares.",
    "ERR_009": "Failure communicating with Compound (Code: 9). Please try again later.",
    "ERR_010": "Failure communicating with Compound (Code: 10). Please try again later.",
    "ERR_011": "Failure communicating with Compound (Code: 11). Please try again later.",
    "ERR_012": "Failure communicating with Compound (Code: 12). Please try again later.",
    "ERR_013": "Could not withdraw funds after selling shares (Code: 13). Please try again.",
    "ERR_014": "Could not withdraw funds after selling shares (Code: 14). Please try again.",
    "ERR_015": "Could not withdraw funds after selling shares (Code: 15). Please try again.",
    "ERR_016": "Could not withdraw funds after selling shares (Code: 16). Please try again.",
    "ERR_017": "Could not withdraw funds after selling shares (Code: 17). Please try again.",
    "ERR_018": "Too much dividends to distribute. Please try a smaller amount (Code: 18).",
    "ERR_019": "Too much dividends to distribute. Please try a smaller amount (Code: 19).",
    "ERR_020": "Too much dividends to distribute. Please try a smaller amount (Code: 20).",
    "ERR_021": "Too much dividends to distribute. Please try a smaller amount (Code: 21).",
    "ERR_022": "Too much dividends to distribute. Please try a smaller amount (Code: 22).",
    "ERR_023": "Only the contract owner can call this function.",
    "ERR_024": "Could not withdraw dev fees. Please try again.",
    "ERR_025": "No amount provided.",
    "ERR_026": "Not enough dividends to withdraw.",
    "ERR_027": "Could not withdraw dividends. Please try again."
  },

  init: function () {

    $("[data-buy-shares-input]").on('input', function () {
      if (App.latestStatus) {
        let $sharesNumTxt = $('[data-buy-shares-num]');
        let $buySharesBtn = $('[data-buy-btn]');

        if ($(this).val().trim().length === 0) {
          $sharesNumTxt.css('visibility', 'hidden');
          $buySharesBtn.prop('disabled', true);
          return;
        }

        try {
          let weiValue = App.toBaseUnit($(this).val().trim(), 18);
          let numberOfSharesInBaseUnits = App.calcBuyAmount(weiValue);
          let numberOfSharesInWholeUnits = App.toWholeUnit(numberOfSharesInBaseUnits, 8);

          if (numberOfSharesInWholeUnits[0] === '0' || numberOfSharesInWholeUnits === '1.00000000') {
            numberOfSharesInWholeUnits = numberOfSharesInWholeUnits.toString() + ' share';
          } else {
            numberOfSharesInWholeUnits = numberOfSharesInWholeUnits.toString() + ' shares';
          }

          $sharesNumTxt.text('≈' + numberOfSharesInWholeUnits).css('visibility', 'visible').removeClass('text-danger');

          if (numberOfSharesInBaseUnits.toString() === '0') {
            $buySharesBtn.prop('disabled', true);
          } else {
            $buySharesBtn.prop('disabled', false);
          }

        } catch (err) {
          console.log(err);
          $sharesNumTxt.text('Invalid number.').css('visibility', 'visible').addClass('text-danger');
          $buySharesBtn.prop('disabled', true);
        };
      }
    });

    $("[data-sell-shares-input]").on('input', function () {
      if (App.latestStatus) {
        let $sharesValueTxt = $('[data-sell-shares-value]');
        let $sellSharesBtn = $('[data-sell-btn]');

        if ($(this).val().trim().length === 0) {
          $sharesValueTxt.css('visibility', 'hidden');
          $sellSharesBtn.prop('disabled', true);
          return;
        }

        try {
          let numberOfSharesInBaseUnits = App.toBaseUnit($(this).val().trim(), 8);

          $sharesValueTxt.text('≈' + App.calcSellAmount(numberOfSharesInBaseUnits) + ' ETH').css('visibility', 'visible').removeClass('text-danger');

          if (numberOfSharesInBaseUnits.toString() === '0') {
            $sellSharesBtn.prop('disabled', true);
          } else {
            $sellSharesBtn.prop('disabled', false);
          }

        } catch (err) {
          console.log(err);
          $sharesValueTxt.text('Invalid number.').css('visibility', 'visible').addClass('text-danger');
          $sellSharesBtn.prop('disabled', true);
        }
      }
    });

    $("[data-dividends-input]").on('input', function () {
      if (App.latestStatus) {
        let $dividendsTxt = $('[data-dividends-txt]');
        let $withdawDividendsBtn = $('[data-withdraw-btn]');

        if ($(this).val().trim().length === 0) {
          $dividendsTxt.css('visibility', 'hidden');
          $withdawDividendsBtn.prop('disabled', true);
          return;
        }

        try {
          if (App.toBaseUnit($(this).val().trim(), 18).toString() === '0') {
            $dividendsTxt.css('visibility', 'hidden');
            $withdawDividendsBtn.prop('disabled', true);
            return;
          }

          $dividendsTxt.css('visibility', 'hidden');
          $withdawDividendsBtn.prop('disabled', false);

        } catch (err) {
          console.log(err);
          $dividendsTxt.text('Invalid number.').css('visibility', 'visible').addClass('text-danger');
          $withdawDividendsBtn.prop('disabled', true);
        }
      }
    });

    $("[data-buy-btn]").on('click', async function () {
      try {
        $("input").prop('disabled', true);
        let weiAmount = App.toBaseUnit($("[data-buy-shares-input]").val(), 18);
        await App.smartSavingsContract.methods.buyShares().estimateGas({ from: App.walletAddress, value: weiAmount });
        await App.smartSavingsContract.methods.buyShares().send({
          from: App.walletAddress, value: weiAmount
        }).on('transactionHash', function(hash){
          App.showTransactionDialog(hash);
        });
      } catch (err) {
        $("input").prop('disabled', false);
        App.showErrorDialog(err);
        return;
      }

      try {
        App.updateStatus(await App.smartSavingsContract.methods.status().call({ from: App.walletAddress }));
        App.hideTransactionDialog();
        $("input").prop('disabled', false);
        $("input[type='text']").val('').trigger('input');
      } catch (err) {
        $("input").prop('disabled', false);
        App.showErrorDialog("Your transaction has been confirmed but there was an error updating the page. Please, refresh it manually.");
      }
    });

    $("[data-sell-btn]").on('click', async function () {
      try {
        $("input").prop('disabled', true);
        let sharesAmount = App.toBaseUnit($("[data-sell-shares-input]").val(), 8);
        await App.smartSavingsContract.methods.sellShares(sharesAmount).estimateGas({ from: App.walletAddress, value: 0 });
        await App.smartSavingsContract.methods.sellShares(sharesAmount).send({
          from: App.walletAddress, value: 0
        }).on('transactionHash', function(hash){
          App.showTransactionDialog(hash);
        });
      } catch (err) {
        $("input").prop('disabled', false);
        App.showErrorDialog(err);
        return;
      }

      try {
        App.updateStatus(await App.smartSavingsContract.methods.status().call({ from: App.walletAddress }));
        App.hideTransactionDialog();
        $("input").prop('disabled', false);
        $("input[type='text']").val('').trigger('input');
      } catch (err) {
        $("input").prop('disabled', false);
        App.showErrorDialog("Your transaction has been confirmed but there was an error updating the page. Please, refresh it manually.");
      }

    });

    $("[data-withdraw-btn]").on('click', async function () {
      try {
        $("input").prop('disabled', true);
        let dividendsAmount = App.toBaseUnit($("[data-dividends-input]").val(), 18);
        await App.smartSavingsContract.methods.withdrawDividends(dividendsAmount).estimateGas({ from: App.walletAddress, value: 0 });
        await await App.smartSavingsContract.methods.withdrawDividends(dividendsAmount).send({
          from: App.walletAddress, value: 0
        }).on('transactionHash', function(hash){
          App.showTransactionDialog(hash);
        });
      } catch (err) {
        $("input").prop('disabled', false);
        App.showErrorDialog(err);
        return;
      }

      try {
        App.updateStatus(await App.smartSavingsContract.methods.status().call({ from: App.walletAddress }));
        App.hideTransactionDialog();
        $("input").prop('disabled', false);
        $("input[type='text']").val('').trigger('input');
      } catch (err) {
        $("input").prop('disabled', false);
        App.showErrorDialog("Your transaction has been confirmed but there was an error updating the page. Please, refresh it manually.");
      }
    });

  },

  isString: function (s) {
    return (typeof s === 'string' || s instanceof String)
  },

  toBaseUnit: function (value, decimals) {
    if (!App.isString(value)) {
      throw new Error('Pass strings to prevent floating point precision issues.');
    }

    const regexStr = '^(0|[1-9]\\d*)(\\.\\d{0,' + decimals + '})?$';

    if (new RegExp(regexStr).test(value) === false) {
      throw new Error('INVALID_NUMBER')
    }

    const BN = web3.utils.BN;
    const ten = new BN(10);
    const base = ten.pow(new BN(decimals));

    // Is it negative?
    let negative = (value.substring(0, 1) === '-');
    if (negative) {
      value = value.substring(1);
    }

    if (value === '.') {
      throw new Error(
        `Invalid value ${value} cannot be converted to`
        + ` base unit with ${decimals} decimals.`);
    }

    // Split it into a whole and fractional part
    let comps = value.split('.');
    if (comps.length > 2) { throw new Error('Too many decimal points'); }

    let whole = comps[0], fraction = comps[1];

    if (!whole) { whole = '0'; }
    if (!fraction) { fraction = '0'; }
    if (fraction.length > decimals) {
      throw new Error('Too many decimal places');
    }

    while (fraction.length < decimals) {
      fraction += '0';
    }

    whole = new BN(whole);
    fraction = new BN(fraction);
    let wei = (whole.mul(base)).add(fraction);

    if (negative) {
      wei = wei.neg();
    }

    return new BN(wei.toString(10), 10);
  },

  toBN: function(value) {
    return  new web3.utils.BN(value);
  },  

  base10: function(exp) {
    return new web3.utils.BN(10).pow(new web3.utils.BN(exp));
  },

  toWholeUnit: function (value, decimals) {
    let base = new web3.utils.BN(10).pow(new web3.utils.BN(decimals));
    let fraction = value.mod(base).toString(10);

    while (fraction.length < decimals) {
      fraction = `0${fraction}`;
    }

    fraction = fraction.match(/^([0-9]*[1-9]|0)(0*)/)[1];

    let whole = value.div(base).toString(10);
    value = `${whole}.${fraction}`;

    let paddingZeroes = decimals - fraction.length;
    while (paddingZeroes > 0) {
      paddingZeroes--;
      value = `${value}0`;
    }

    return value;
  },
  
  calcBuyAmount: function(weiValue) {
    let devFee = weiValue.mul(App.toBN(25)).div(App.base10(4));
    let dividendFee = weiValue.mul(App.toBN(75)).div(App.base10(4));
    let finalAmount = weiValue.sub(devFee).sub(dividendFee);
    return finalAmount.mul(App.base10(18)).div(App.latestStatus.exchangeRateInBaseUnits);
  },

  calcSellAmount: function(numberOfSharesInBaseUnits) {
    let weiValue = numberOfSharesInBaseUnits.mul(App.latestStatus.exchangeRateInBaseUnits).div(App.base10(18));
    let devFee = weiValue.mul(App.toBN(25)).div(App.base10(4));
    let dividendFee = weiValue.mul(App.toBN(75)).div(App.base10(4));
    let finalAmount = weiValue.sub(devFee).sub(dividendFee);
    return App.toWholeUnit(finalAmount, 18) 
  },

  formatAddress(address) {
    return "0x" + address.toUpperCase().substring(2);
  },

  makeStatus(statusTuple) {
    const BN = web3.utils.BN;
    return {
      numberOfSharesInBaseUnits: new BN(statusTuple[0]),
      exchangeRateInBaseUnits: new BN(statusTuple[1]),
      holdingPowerInBaseUnits: new BN(statusTuple[2]),
      availableDiviendsInBaseUnits: new BN(statusTuple[3])
    }
  },

  setMaxBuy: async function (source) {
    let maxWei = new web3.utils.BN(String(await web3.eth.getBalance(App.walletAddress)));
    $(source).parent().find('[data-input]').val(this.toWholeUnit(maxWei, 18)).focus().trigger('input');
  },

  setMaxSell: async function (source) {
    $(source).parent().find('[data-input]').val(this.toWholeUnit(this.latestStatus.numberOfSharesInBaseUnits, 8)).focus().trigger('input');
  },

  setMaxDividends: async function (source) {
    $(source).parent().find('[data-input]').val(this.toWholeUnit(this.latestStatus.availableDiviendsInBaseUnits, 18)).focus().trigger('input');
  },

  async connectWebWallet() {
    
    try {

      $("[data-connect-btn]").find('button').text('Connecting...').prop('disabled', true);

      if (!window.ethereum) {
        throw "Failure detecting wallet. Please make sure your MetaMask wallet is installed.";
      }

      let response = await ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);

      if (!response) {
        throw "Failure detecting wallet. Please make sure your MetaMask wallet is installed.";
      }

      let accounts = response;
      if (!accounts || !accounts.length) {
        throw "Failure detecting wallet. Please make sure your MetaMask wallet is installed.";
      }

      App.walletAddress = accounts[0];
      App.networkId = await web3.eth.net.getId();
      App.smartSavingsContract = new web3.eth.Contract(this.contractABI, this.contractAddress);
  
      // Update status right away.
      App.updateStatus(await App.smartSavingsContract.methods.status().call({ from: App.walletAddress }));

      // And then, periodically (every 15 seconds).
      setInterval(async function () {
        App.updateStatus(await App.smartSavingsContract.methods.status().call({ from: App.walletAddress }));
      }, 15 * 1000);

      $("[data-connect-btn]").hide();
      $("[data-wallet-address]").show().find('em').text(App.formatAddress(App.walletAddress));

      $('[data-input]').prop('disabled', false);
      $('[data-max-button]').prop('disabled', false);

    } catch (err) {
      $("[data-connect-btn]").find('button').text('Connect wallet').prop('disabled', false);
      App.showErrorDialog(err);
    };
  },

  updateStatus: function (statusTuple) {
    let status = this.makeStatus(statusTuple);
    this.latestStatus = status;
    
    let numberOfShares = this.toWholeUnit(status.numberOfSharesInBaseUnits, 8);
    let ethValue = this.calcSellAmount(status.numberOfSharesInBaseUnits);
    let holdingPower = this.toWholeUnit(status.holdingPowerInBaseUnits, 2) + '%';
    let dividends = this.toWholeUnit(status.availableDiviendsInBaseUnits, 18);
    let progress = Math.round(status.holdingPowerInBaseUnits.toNumber() / 100) + '%';

    $("[data-shares-num]").text(numberOfShares);
    $("[data-eth-value]").text(ethValue);
    $("[data-holding-power]").text(holdingPower);
    $("[data-dividends]").text(dividends);
    $("#progressbar").css('width',  progress);
  },

  showTransactionDialog: function(hash) {
    let $transactionModal = $("#transactionModal");
    let hashUrl = (App.networkId === 1 ? 'https://etherscan.io/tx/' : 'https://ropsten.etherscan.io/tx/') + hash;
    
    $transactionModal.find('a').attr('href', hashUrl).text(hash);
    $transactionModal.data('open-callback', null);
    $transactionModal.data('open', false);

    $transactionModal.off().on('shown.bs.modal', function() {
      $transactionModal.off();
      $transactionModal.data('open', true);
      let openCallback = $transactionModal.data('open-callback');
      $transactionModal.data('open-callback', null);
      if (openCallback !== null) {
        openCallback();
      }
    });

    $transactionModal.modal({ backdrop: 'static', keyboard: false });
    $transactionModal.modal('show');
  },

  hideTransactionDialog: function() {
    let $transactionModal = $("#transactionModal");
    let open = $transactionModal.data('open');
    if (open === true) {
      $transactionModal.modal('hide');
    } else {
      $transactionModal.data('open-callback', function() {
        $transactionModal.modal('hide');
      });
    }
  },

  showErrorDialog: function(errorObj) {
    console.log(errorObj);

    App.hideTransactionDialog();

    let $modal = $("#errorModal");
    let title = "Error";
    let error = errorObj;
    if (errorObj.message) {
      error = errorObj.message;
    }

    if (errorObj.code === -32002) {
      title = "Authorization pending...";
      error = "Please allow this dApp to connect to your MetaMask wallet.";
    } else if (errorObj.code === 4001) {
      // User just canceled...
      return;
    }

    let index = error.indexOf("{ERR_");
    if (index >= 0) {
      let temp = error.substring(index + 1);
      index = temp.indexOf("}");
      if (index >= 0) {
        temp = temp.substring(0, index);
        if (App.errorMessages.hasOwnProperty(temp)) {
          error = App.errorMessages[temp];
        }
      }
    }

    $modal.find('.modal-body').text(error);
    $modal.find('.modal-title').text(title);
    $modal.modal('show');    
  }
};

$(function () {
  $(window).load(function () {
    window.App = App;
    App.init();
    //$("#helpModal").modal('show');
  });
});
