describe 'Handlebars', ->

  collection = ['ele1', 'ele2', 'ele3']
  compileTemplate = (templateID) ->
    Handlebars.compile $("##{templateID}").html()

  it 'should render a template without leading or trailing whitespace between li elements', ->
    expected = compileTemplate('expectedEachTemplate')()
    template = compileTemplate 'eachTemplate'
    result = template collection:collection
    expect(result).toMatch expected

  it 'should not add whitespace when the if block is rendered', ->
    expected = compileTemplate('expectedIfTemplate')()
    template = compileTemplate 'ifTemplate'
    result = template booleanValue:true
    expect(result).toMatch expected

  it 'should not add whitespace when the if block is NOT rendered', ->
    template = compileTemplate 'ifTemplate'
    expected = ''
    result = template booleanValue:false
    expect(result).toMatch expected    

  it 'should not create whitespace for where the ELSE block existed in the template', ->
    expected = compileTemplate('expectedTrueIfTemplate')()
    template = compileTemplate 'ifElseTemplate'
    result = template booleanValue:true
    expect(result).toMatch expected

  it 'should not create whitespace for where the IF block existed in the template', ->
    expected = compileTemplate('expectedFalseIfTemplate')()
    template = compileTemplate 'ifElseTemplate'
    result = template booleanValue:false
    expect(result).toMatch expected

  it 'should not create whitespace where the EACH tag once existed', ->
    expected = compileTemplate('expectedOnlyEachTemplate')()
    template = compileTemplate 'onlyEachTemplate'
    result = template collection:collection
    expect(result).toMatch expected
