///****************************************************************************
// * Copyright (c) 2012, the Konoha project authors. All rights reserved.
// * Redistribution and use in source and binary forms, with or without
// * modification, are permitted provided that the following conditions are met:
// *
// *  * Redistributions of source code must retain the above copyright notice,
// *    this list of conditions and the following disclaimer.
// *  * Redistributions in binary form must reproduce the above copyright
// *    notice, this list of conditions and the following disclaimer in the
// *    documentation and/or other materials provided with the distribution.
// *
// * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
// * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
// * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
// * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
// * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
// * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
// * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// ***************************************************************************/
//
//#ifndef TESTKONOHA_H_
//#define TESTKONOHA_H_
//
//#define MAX 1000
//
//static uintptr_t keys[] = {
//	1, 3, 2, 3, 8, 1, 2, 4, 9, 12, 2, 19, 3, 2, 7, 9, 10,
//	11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
//	40, 80, 90, 100, 1000, 30, 32, 33, 45, 12, 13, 14, 15
//};
//
//static int checkkvs(size_t key, uintptr_t val)
//{
//	long i;
//	for(i= (sizeof(keys)/sizeof(uintptr_t)) - 1; i >= 0; i--) {
//		if(keys[i] == key) {
//			return (val == i);
//		}
//	}
//	return false;
//}
//
//static int test_kvproto(CTX)
//{
//	size_t i;
//	kObject *o = K_NULL;
//	assert(sizeof(kvs_t) == sizeof(void*) * 2);
//	for(i=0; i < sizeof(keys)/sizeof(uintptr_t); i++) {
//		ksymbol_t key = (ksymbol_t)keys[i];
//		kObject_setUnboxedValue(o, key, TY_Int, i);
//	}
//	for(i=0; i < sizeof(keys)/sizeof(uintptr_t); i++) {
//		ksymbol_t key = (ksymbol_t)keys[i];
//		uintptr_t val = kObject_getUnboxedValue(o, key, -1);
//		//DBG_P("key=%d, val=%d, %d, results=%d", key, val, i, checkkvs(key, val));
//		assert(checkkvs(key, val));
//	}
//	for(i=0; i < sizeof(keys)/sizeof(uintptr_t); i++) {
//		ksymbol_t key = (ksymbol_t)keys[i];
//		kObject_removeKey(o, key);
//	}
//	for(i=0; i < sizeof(keys)/sizeof(uintptr_t); i++) {
//		ksymbol_t key = (ksymbol_t)keys[i];
//		intptr_t val = (intptr_t)kObject_getUnboxedValue(o, key, -1);
//		assert(val == -1); // removed
//	}
//	return 0;
//}
//
//static int test_kwb(CTX)
//{
//	const char *t= "0123456789012345678901234567890123456789";
//	size_t i = 0;
//	karray_t *buf = new_karray(_ctx, 0, 64);
//	kwb_t wb;
//	kwb_init(buf, &wb);
//	kwb_printf(&wb, "%s%s%s%s", t, t, t, t);
//	t = kwb_top(&wb, 1);
//	while(*t != 0) {
////		DBG_P("i=%d, ch='%c', '%c'", i, *t, '0' + (i % 10));
//		assert(*t == '0' + (i % 10));
//		i++; t++;
//	}
//	assert(i == kwb_bytesize(&wb));
//	kwb_free(&wb);
//	KARRAY_FREE(buf);
//	KFREE(buf, sizeof(karray_t));
//	return 0;
//}
//
//static int test_logger(CTX)
//{
//	int v2 = 3;
//	int v3 = -3;
//	int i;
//	for (i = 0; i < 10; i++) {
//		ktrace(LOGPOL_DEBUG,
//			KEYVALUE_s("key1", "hello world"),
//			KEYVALUE_u("key2", v2),
//			KEYVALUE_u("key3", v3)
//		);
//	}
//	return 0;
//}
//#define FN(T)  #T, T
//
//DEFINE_TESTFUNC KonohaTestSet[] = {
//	{FN(test_kvproto)},
//	{FN(test_kwb)},
//	{FN(test_logger)},
//	{NULL, NULL},
//};
//
//#endif /* TESTKONOHA_H_ */
