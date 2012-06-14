/////////////////////////
//KonohaSpace_tokenize
/////////////////////////

function KonohaSpace_tokenizeTest() {}
registerTestSuite(KonohaSpace_tokenizeTest);

KonohaSpace_tokenizeTest.prototype.ReturnCorrectTokens = function() {
	var _ctx = null;
	var ks = null;
	var source = "1+1";
	var uline = 0;
	var a = new konoha.kArray();
	konoha.KonohaSpace_tokenize(_ctx, ks, source, uline, a);
	expectEq(konoha.ktoken_t.TK_INDENT, a.data[0].tt);
	expectEq(konoha.ktoken_t.TK_INT, a.data[1].tt);
	expectEq("1", a.data[1].text.text);
	expectEq(konoha.ktoken_t.TK_OPERATOR, a.data[2].tt);
	expectEq("+", a.data[2].text.text);
	expectEq(konoha.ktoken_t.TK_INT, a.data[3].tt);
	expectEq("1", a.data[3].text.text);

	var _ctx = null;
	var ks = null;
	var source = "\"hoge\"";
	var uline = 0;
	var a = new konoha.kArray();
	konoha.KonohaSpace_tokenize(_ctx, ks, source, uline, a);
	expectEq(konoha.ktoken_t.TK_INDENT, a.data[0].tt);
	expectEq(konoha.ktoken_t.TK_TEXT, a.data[1].tt);
	expectEq("hoge", a.data[1].text.text);

	var _ctx = null;
	var ks = null;
	var source = "a *= (c/(b + d))";
	var uline = 0;
	var a = new konoha.kArray();
	konoha.KonohaSpace_tokenize(_ctx, ks, source, uline, a);
	expectEq(konoha.ktoken_t.TK_INDENT, a.data[0].tt);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[1].tt);
	expectEq("a", a.data[1].text.text);
	expectEq(konoha.ktoken_t.TK_OPERATOR, a.data[2].tt);
	expectEq("*=", a.data[2].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[3].tt);
	expectEq("(", a.data[3].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[4].tt);
	expectEq("c", a.data[4].text.text);
	expectEq(konoha.ktoken_t.TK_OPERATOR, a.data[5].tt);
	expectEq("/", a.data[5].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[6].tt);
	expectEq("(", a.data[6].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[7].tt);
	expectEq("b", a.data[7].text.text);
	expectEq(konoha.ktoken_t.TK_OPERATOR, a.data[8].tt);
	expectEq("+", a.data[8].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[9].tt);
	expectEq("d", a.data[9].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[10].tt);
	expectEq(")", a.data[10].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[11].tt);
	expectEq(")", a.data[11].text.text);


	var _ctx = null;
	var ks = null;
	var source = "int[] ia = new int[0]";
	var uline = 0;
	var a = new konoha.kArray();
	konoha.KonohaSpace_tokenize(_ctx, ks, source, uline, a);
	expectEq(konoha.ktoken_t.TK_INDENT, a.data[0].tt);
	expectEq(konoha.ktoken_t.TK_TYPE, a.data[1].tt);
	expectEq("int", a.data[1].text.text);
	expectEq(konoha.ktoken_t.AST_BRANCET, a.data[2].tt);
	expectEq("[", a.data[2].text.text);
	expectEq(konoha.ktoken_t.AST_BRANCET, a.data[3].tt);
	expectEq("]", a.data[3].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[4].tt);
	expectEq("ia", a.data[4].text.text);
	expectEq(konoha.ktoken_t.TK_OPERATOR, a.data[5].tt);
	expectEq("=", a.data[5].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[6].tt);
	expectEq("new", a.data[6].text.text);
	expectEq(konoha.ktoken_t.TK_TYPE, a.data[7].tt);
	expectEq("int", a.data[7].text.text);
	expectEq(konoha.ktoken_t.AST_BRANCET, a.data[8].tt);
	expectEq("[", a.data[8].text.text);
	expectEq(konoha.ktoken_t.TK_INT, a.data[9].tt);
	expectEq("0", a.data[9].text.text);
	expectEq(konoha.ktoken_t.AST_BRANCET, a.data[10].tt);
	expectEq("]", a.data[10].text.text);
//	expectEq(konoha.ktoken_t.TK_OPERATOR, a.data[11].tt);
//	expectEq(";", a.data[11].text.text);

	var _ctx = null;
	var ks = null;
	var source = "int fibo(n) {\n };";
	var uline = 0;
	var a = new konoha.kArray();
	konoha.KonohaSpace_tokenize(_ctx, ks, source, uline, a);
	expectEq(konoha.ktoken_t.TK_INDENT, a.data[0].tt);
	expectEq(konoha.ktoken_t.TK_TYPE, a.data[1].tt);
	expectEq("int", a.data[1].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[2].tt);
	expectEq("fibo", a.data[2].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[3].tt);
	expectEq("(", a.data[3].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[4].tt);
	expectEq("n", a.data[4].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[5].tt);
	expectEq(")", a.data[5].text.text);
	expectEq(konoha.ktoken_t.AST_BRACE, a.data[6].tt);
	expectEq("{", a.data[6].text.text);
//	expectEq(konoha.ktoken_t.TK_TEXT, a.data[7].tt);
//	expectEq("\n", a.data[7].text.text);
	expectEq(konoha.ktoken_t.AST_BRACE, a.data[8].tt);
	expectEq("}", a.data[8].text.text);
//	expectEq(konoha.ktoken_t.TK_TEXT, a.data[9].tt);
//	expectEq(";", a.data[9].text.text);

	var _ctx = null;
	var ks = null;
	var source = "x = ia.get(73)";
	var uline = 0;
	var a = new konoha.kArray();
	konoha.KonohaSpace_tokenize(_ctx, ks, source, uline, a);
	expectEq(konoha.ktoken_t.TK_INDENT, a.data[0].tt);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[1].tt);
	expectEq("x", a.data[1].text.text);
	expectEq(konoha.ktoken_t.TK_OPERATOR.data[2].tt);
	expectEq("=", a.data[2].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[3].tt);
	expectEq("ia", a.data[3].text.text);
//	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[4].tt);
//	expectEq(".", a.data[4].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[5].tt);
	expectEq("get", a.data[5].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[6].tt);
	expectEq("(", a.data[6].text.text);
	expectEq(konoha.ktoken_t.TK_INT, a.data[7].tt);
	expectEq("73", a.data[7].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[8].tt);
	expectEq(")", a.data[8].text.text);
//	expectEq(konoha.ktoken_t.TK_TEXT, a.data[9].tt);
//	expectEq(";", a.data[9].text.text);
	var _ctx = null;
	var ks = null;
	var source = "a =< b";
	var uline = 0;
	var a = new konoha.kArray();
	konoha.KonohaSpace_tokenize(_ctx, ks, source, uline, a);
	expectEq(konoha.ktoken_t.TK_INDENT, a.data[0].tt);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[1].tt);
	expectEq("a", a.data[1].text.text);
	expectEq(konoha.ktoken_t.TK_OPERATOR.data[2].tt);
	expectEq("=", a.data[2].text.text);
	expectEq(konoha.ktoken_t.TK_OPERATOR, a.data[3].tt);
	expectEq("<", a.data[3].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[4].tt);
	expectEq("b", a.data[4].text.text);

	var _ctx = null;
	var ks = null;
	var source = "System.p(\"hoge\".get(0));";
	var uline = 0;
	var a = new konoha.kArray();
	konoha.KonohaSpace_tokenize(_ctx, ks, source, uline, a);
	expectEq(konoha.ktoken_t.TK_INDENT, a.data[0].tt);
//	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[1].tt);
//	expectEq("System", a.data[1].text.text);
//	expectEq(konoha.ktoken_t.TK_OPERATOR, a.data[2].tt);
//	expectEq(".", a.data[2].text.text);
//	expectEq(konoha.ktoken_t.TK_OPERATOR, a.data[3].tt);
//	expectEq("p", a.data[3].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[4].tt);
	expectEq("(", a.data[4].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[5].tt);
	expectEq("hoge", a.data[5].text.text);
	expectEq(konoha.ktoken_t.TK_OPERATOR, a.data[6].tt);
	expectEq(".", a.data[6].text.text);
	expectEq(konoha.ktoken_t.TK_SYMBOL, a.data[7].tt);
	expectEq("get", a.data[7].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[8].tt);
	expectEq("(", a.data[8].text.text);
	expectEq(konoha.ktoken_t.TK_INT, a.data[9].tt);
	expectEq("0", a.data[9].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[10].tt);
	expectEq(")", a.data[10].text.text);
	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[11].tt);
	expectEq(")", a.data[11].text.text);
//	expectEq(konoha.ktoken_t.AST_PARENTHESIS, a.data[12].tt);
//	expectEq(";", a.data[12].text.text);
}
