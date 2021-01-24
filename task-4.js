const formatString = function(string) {
    let stringLength = string.length;
    return stringLength < 40 ? string : string.substring(0, 40) +  `...`;
    }
    console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
    console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
    console.log(formatString('Curabitur ligula sapien.'));