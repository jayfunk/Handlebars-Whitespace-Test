(function() {

  describe('Handlebars', function() {
    var collection, compileTemplate;
    collection = ['ele1', 'ele2', 'ele3'];
    compileTemplate = function(templateID) {
      return Handlebars.compile($("#" + templateID).html());
    };
    it('should render a template without leading or trailing whitespace between li elements', function() {
      var expected, result, template;
      expected = compileTemplate('expectedEachTemplate')();
      template = compileTemplate('eachTemplate');
      result = template({
        collection: collection
      });
      return expect(result).toMatch(expected);
    });
    it('should not add whitespace when the if block is rendered', function() {
      var expected, result, template;
      expected = compileTemplate('expectedIfTemplate')();
      template = compileTemplate('ifTemplate');
      result = template({
        booleanValue: true
      });
      return expect(result).toMatch(expected);
    });
    it('should not add whitespace when the if block is NOT rendered', function() {
      var expected, result, template;
      template = compileTemplate('ifTemplate');
      expected = '';
      result = template({
        booleanValue: false
      });
      return expect(result).toMatch(expected);
    });
    it('should not create whitespace for where the ELSE block existed in the template', function() {
      var expected, result, template;
      expected = compileTemplate('expectedTrueIfTemplate')();
      template = compileTemplate('ifElseTemplate');
      result = template({
        booleanValue: true
      });
      return expect(result).toMatch(expected);
    });
    it('should not create whitespace for where the IF block existed in the template', function() {
      var expected, result, template;
      expected = compileTemplate('expectedFalseIfTemplate')();
      template = compileTemplate('ifElseTemplate');
      result = template({
        booleanValue: false
      });
      return expect(result).toMatch(expected);
    });
    return it('should not create whitespace where the EACH tag once existed', function() {
      var expected, result, template;
      expected = compileTemplate('expectedOnlyEachTemplate')();
      template = compileTemplate('onlyEachTemplate');
      result = template({
        collection: collection
      });
      return expect(result).toMatch(expected);
    });
  });

}).call(this);
