export default {
  lang: 'el-gr',
  label: {
    clear: 'Καθαρισμός',
    ok: 'Εντάξει',
    cancel: 'Ακύρωση',
    close: 'Κλείσιμο',
    set: 'Ορισμός',
    select: 'Επιλογή',
    reset: 'Επαναφορά',
    remove: 'Αφαίρεση',
    update: 'Αναβάθμιση',
    create: 'Δημιουργία',
    search: 'Αναζήτηση',
    filter: 'Φίλτρο',
    refresh: 'Ανανέωση'
  },
  date: {
    days: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
    daysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
    months: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
    monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
    firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false // needs further reading and testing
  },
  pullToRefresh: {
    pull: 'Τράβηξε κάτω για ανανέωση',
    release: 'Άφησε για ανανέωση',
    refresh: 'Ανανέωση...'
  },
  table: {
    noData: 'Χωρίς δεδομένα',
    noResults: 'Δεν βρέθηκαν αποτελέσματα',
    loading: 'Φόρτωση...',
    selectedRows: function (rows) {
      return rows === 1
        ? '1 Επιλεγμένες εγγραφές.'
        : (rows === 0 ? 'Καμμία' : rows) + ' Επιλεγμένες Εγγραφές.'
    },
    rowsPerPage: 'Εγγραφές ανα σελίδα:',
    allRows: 'Όλες',
    pagination: function (start, end, total) {
      return start + '-' + end + ' of ' + total
    },
    columns: 'Στήλες'
  },
  editor: {
    url: 'URL', // Needs Translation
    bold: 'Bold', // Needs Translation
    italic: 'Italic', // Needs Translation
    strikethrough: 'Strikethrough', // Needs Translation
    underline: 'Underline', // Needs Translation
    unorderedList: 'Unordered List', // Needs Translation
    orderedList: 'Ordered List', // Needs Translation
    subscript: 'Subscript', // Needs Translation
    superscript: 'Superscript', // Needs Translation
    hyperlink: 'υπερσύνδεση',
    toggleFullscreen: 'Toggle Fullscreen', // Needs Translation
    quote: 'Quote', // Needs Translation
    left: 'αριστερή ευθυγράμμιση',
    center: 'κεντρική ευθυγράμμιση',
    right: 'Δεξιά ευθυγράμμιση',
    justify: 'Justify align', // Needs Translation
    print: 'Εκτύπωση', // Needs Translation
    outdent: 'Decrease indentation', // Needs Translation
    indent: 'Increase indentation', // Needs Translation
    removeFormat: 'Remove formatting', // Needs Translation
    formatting: 'Formatting', // Needs Translation
    fontSize: 'Font Size', // Needs Translation
    align: 'Ευθυγράμμιση',
    hr: 'Insert Horizontal Rule', // Needs Translation
    undo: 'Αναίρεση',
    redo: 'Redo', // Needs Translation
    header1: 'Header 1', // Needs Translation
    header2: 'Header 2', // Needs Translation
    header3: 'Header 3', // Needs Translation
    header4: 'Header 4', // Needs Translation
    header5: 'Header 5', // Needs Translation
    header6: 'Header 6', // Needs Translation
    paragraph: 'Παράγραφος',
    code: 'Κώδικας',
    size1: 'Very small', // Needs Translation
    size2: 'A bit small', // Needs Translation
    size3: 'Κανονικό',
    size4: 'Medium-large', // Needs Translation
    size5: 'Big', // Needs Translation
    size6: 'Very big', // Needs Translation
    size7: 'Μέγιστο',
    defaultFont: 'Προκαθορισμένη Γραμματοσειρά'
  },
  tree: {
    noNodes: 'No nodes available', // Needs Translation
    noResults: 'Δεν βρέθηκαν αποτελέσματα'
  }
}
